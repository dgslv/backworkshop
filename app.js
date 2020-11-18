express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {
    connect
} = require('./db/db');
const cors = require('cors');



app.use(cors())
app.use(bodyParser
    .json({
        limit: '1mb'
    })
)

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV != 'test') {
    connect()
        .then(
            () => {
                app.listen(PORT, () => {
                    console.log(`Server is running on port ${PORT}`)
                })
            }
        )
        .catch(
            e => {
                console.log(`Erro durante a conexão com o banco de dados \n${e}`)
            }
        )
}

const jwt = require('jsonwebtoken');
const token = jwt.sign('test', require('./config/config.json').authKey);

const routes = require('./routes/routes');
app.use('/', routes);
const authRoutes = require('./routes/auth/routes');
app.use('/auth', authRoutes);

module.exports = app;


