const jwt = require('jsonwebtoken');
const SECRET = "Felipe-token";

const verify = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.body.token, SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Falha na verificação!'})
    }    
};

module.exports = verify;