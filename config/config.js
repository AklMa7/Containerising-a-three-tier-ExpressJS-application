module.exports={
    MongoDB_IP: process.env.MongoDB_IP || "MongoDB",  //default is variable not set 
    MongoDB_PORT: process.env.MongoDB_PORT || 27017, // always give same names to avoid confusion
    MongoDB_USER: process.env.MongoDB_USER,
    MongoDB_PASSWORD: process.env.MongoDB_PASSWORD
};