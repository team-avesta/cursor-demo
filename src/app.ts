import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import morgan from "morgan";
import helloRouter from "./presentation/routes/hello";
import logger from "./infrastructure/utils/logger";
import { register, httpRequestsTotal, httpRequestDurationSeconds } from "./infrastructure/utils/metrics";

const app = express();

// Swagger setup
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express API with Swagger",
            version: "1.0.0",
            description: "A simple Express API"
        }
    },
    apis: ["./src/presentation/routes/*.ts"]
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Middleware
app.use(express.json());

// HTTP request logging
app.use(morgan("combined", { stream: { write: (message) => logger.info(message.trim()) } }));

// Metrics middleware
app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        httpRequestsTotal.inc({ method: req.method, route: req.route?.path || req.path, status_code: res.statusCode });
        httpRequestDurationSeconds.observe(
            { method: req.method, route: req.route?.path || req.path, status_code: res.statusCode },
            duration / 1000
        );
    });
    next();
});

// Metrics endpoint
app.get("/metrics", async (req, res) => {
    try {
        res.set("Content-Type", register.contentType);
        res.end(await register.metrics());
    } catch (err) {
        res.status(500).end(err);
    }
});

// Routes
app.use("/api", helloRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.error(`${err.stack}`);
    res.status(500).send("Something broke!");
});

export default app;
