const jwt = require('jsonwebtoken');

const roleMiddleware = async (req, res, next) => {
    // Retrieve token from the Authorization header
    const token = req.headers.authorization ; // Ensure token is extracted correctly
    console.log(token)

    if (!token) {
        return res.status(401).json({ msg: "Token Missing" });
    }

    try {
        // Verify the token
        jwt.verify(token, "vips", (err, decoded) => {
            if (err) {
                return res.status(401).json({ msg: "Invalid Token" });
            }

            // Attach user information to the request object
            req.user = {
                userid: decoded.userid,
                name: decoded.name,
                email: decoded.email,
                role: decoded.role,
            };

            next(); // Proceed to the next middleware or route handler
        });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", error: error.message });
    }
};

module.exports = { roleMiddleware };
