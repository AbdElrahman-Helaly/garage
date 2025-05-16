

const authorize = (allowedRoles) => {
    return (req, res, next) => {
        console.log("2");

        if (!req.user) {
            return res.status(404).json({ error: "Not Found user" });
        }
        console.log("User from token:", req.user);

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                error: "Access denied",
                message: `Role '${req.user.role}' not authorized for this action`
            });
        }
        next();
    };
};


module.exports = authorize;