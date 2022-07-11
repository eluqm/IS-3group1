import dotenv from 'dotenv'
dotenv.config()

export default {
    MONGO_DB: process.env.MONGO_DB || 'waqya_db',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PWD || 'admin',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/?directConnection=true',
    PORT: process.env.PORT || 8000
}