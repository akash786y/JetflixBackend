const controller = require('../controller/login')


module.exports = async (fastify)=>{

    fastify.post('/login', controller.getLoginData);
}