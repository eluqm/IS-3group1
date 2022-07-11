export default {
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    MONGO_PORT: process.env.MONGO_PORT || '27017',
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'waqya_db',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    PORT: process.env.PORT || 8000
}