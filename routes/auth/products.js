const router = express.Router();

let products = [{
    id: 1,
    title: 'Camiseta',
    description: 'Verde',
    price: 10,
    picture: '',
    features: ['Rosa'],
},
{
    id: 1,
    title: 'Camiseta',
    description: 'Verde',
    price: 10,
    picture: '',
    features: ['Rosa'],
},
{
    id: 1,
    title: 'Camiseta',
    description: 'Verde',
    price: 10,
    picture: '',
    features: ['Rosa'],
},
{
    id: 1,
    title: 'Camiseta',
    description: 'Verde',
    price: 10,
    picture: '',
    features: ['Rosa'],
},
{
    id: 1,
    title: 'Camiseta',
    description: 'Verde',
    price: 10,
    picture: '',
    features: ['Rosa'],
}];

// id?: number,
// title: string,
// description: string,
// picture: string,
// price: number


router.get('/',
    (req, res) => {
        res.json({
            success: true,
            data: products
        })
    }
)

const mandatoryFieldsForProducts = ['title', 'features', 'price', 'photos'];

router.post('/', (req, res) => {
    const dataKeys = Object.keys(req.body);
    const canRegisterProduct = mandatoryFieldsForProducts.every(key => dataKeys.includes(key));

    if (canRegisterProduct) {
        products = [
            ...products,
            {
                title: req.body.title,
                price: req.body.price,
                photo: req.body.photo,
                features: req.body.features,
            }
        ];

        res.json({
            success: true
        })
    } else {
        res.json({
            success: false,
            message: 'Campo título, características, preço e fotos são obrigatórios',
        })
    }
})

module.exports = router;
