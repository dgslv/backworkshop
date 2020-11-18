const router = express.Router();

router
    .get('/',
        (req, res) => {
            res.json({
                success: true,
                message: 'ok',
            })
        }
    )

module.exports = router;