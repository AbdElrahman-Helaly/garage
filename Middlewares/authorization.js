

const authorize = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(404).json({ error: "Not Found" });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: "unAutherize" });
        }
        next();
    };
};


module.exports = authorize;