import express from 'express';
const router = express.Router();
import cors from 'cors';

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE', 'PATCH']
}

router.get('/', cors(corsOptions), (req, res) => {
    res.status(200)
    .json({
    status: 'success',
    message: 'Welcome to Invitation Service'
    });
});

module.exports = router;