require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    dbURI: process.env.DB_URI || 'mongodb+srv://yashaswini13695:Jdk6Jbxrx95yVtx6@onboarding.8iyfepm.mongodb.net/?retryWrites=true&w=majority&appName=Onboarding',
    jwtSecret: process.env.JWT_SECRET
};