const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../../config/config.json');

// router.use('/',
//     (req, res, next) => {
//         const token = req.headers.authorization || req.body.token;

//         if (token) {
//             jwt.verify(
//                 token,
//                 config.authKey,
//                 (err, data) => {
//                     if (err) {
//                         res.sendStatus(403)
//                     } else {
//                         next();
//                     }
//                 })
//         } else {
//             res.sendStatus(404);
//         }
//     }
// )

// router.get('/', (req, res) => {
//     res.json({
//         success: true,
//         message: 'permitido'
//     })
// })

const products = require('./products');

router.use('/products', products);

module.exports = router;
