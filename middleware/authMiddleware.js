// Logic to manage rights of different users dedpending on their sessions status ( logged in or not ).
// Express middleware = function that runs b4 the controller. 
// Check if there is a user proprety attached to the session object -> Forward the request to the controller if previous statement is true

const protect = (req, res, next) => {
    const {user} = req.session 

    if(!user) {
        return res.status(401).json({status: 'fail' , message: 'you are unauthorized to access this feature !'});
    }

    req.user = user;

    next();
};

module.exports = protect ;

