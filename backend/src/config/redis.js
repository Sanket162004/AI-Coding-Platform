const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password:process.env.REDIS_PASS, // Make sure to set this environment variable
    
    socket: {
        host: 'redis-10351.crce206.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10351
    }
});

module.exports = redisClient;