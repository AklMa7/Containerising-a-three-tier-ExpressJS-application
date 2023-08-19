module.exports={
    MongoDB_IP: process.env.MongoDB_IP || "MongoDB",  //default is variable not set 
    MongoDB_PORT: process.env.MongoDB_PORT || 27017, // always give same names to avoid confusion
    MongoDB_USER: process.env.MongoDB_USER,
    MongoDB_PASSWORD: process.env.MongoDB_PASSWORD,
    REDIS_URL: process.env.REDIS_URL || "redis" , // "redis" actually refers the the ip adress of the redis db container ( DNS )
    REDIS_PORT: process.env.REDIS_PORT || 6379,   // default port for redis 
    SESSION_SECRET: process.env.SESSION_SECRET
};