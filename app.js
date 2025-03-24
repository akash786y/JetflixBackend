const fastify = require('fastify')()
const connectDB = require("./mongo");
const cors = require('@fastify/cors');
require('dotenv').config();

const route = require('./routes/route')

fastify.register(route, { prefix: '/api' });

connectDB()

fastify.register(cors, {
    origin: "*", // Or specify frontend URL like "http://localhost:5173"
    methods: ["GET", "POST", "PUT", "DELETE"]
});

async function start() {
    try {

        await fastify.listen({ port: 3000, host: '0.0.0.0' });
        console.log('Server running on port 3000');
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

start()

