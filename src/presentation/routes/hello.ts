import express from "express";
import logger from "../../infrastructure/utils/logger";
import { Counter } from "prom-client";

const router = express.Router();

const helloCounter = new Counter({
    name: "hello_requests_total",
    help: "Total number of hello requests"
});

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a hello message
 *     responses:
 *       200:
 *         description: Hello World!
 */
router.get("/hello", (req, res) => {
    logger.info("Hello endpoint called");
    helloCounter.inc();
    res.json({ message: "Hello World!" });
});

export default router;
