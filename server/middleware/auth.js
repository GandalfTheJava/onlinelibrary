const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");

        if (!token) return res.status(401).json({ message: "User not authenticated. Access denied." });

        const verifiedUser = jwt.verify(token, process.env.SECRET_KEY);

        if (!verifiedUser) return res.status(401).json({ message: "Token verification failed. Access denied." });

        req.user = verifiedUser.id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

module.exports = auth;