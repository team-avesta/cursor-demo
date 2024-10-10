import dotenv from "dotenv";
import app from "./app";
import logger from "./infrastructure/utils/logger";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});
