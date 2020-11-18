/**
 * @module services/user
 */

const userModel = require('../models/userModel');

module.exports = {
    getUsers: () => {
        return userModel.find().lean();
    },
    getUser: (user) => {
        return userModel.findOne({ _id: user }).lean();
    },
    /**
     * @description cadastra um usuário no banco de dados
     * 
     * @param {{name: string, password: string}} object - objeto contendo as informações a serem cadastradas
     * @property {String} name - nome do usuario a ser cadastrado  
     * @property {String} password - senha do usuario a ser cadastrado  
     * 
     * @returns {Promise}
     */
    addUser: ({
        name,
        password
    }) => {
        return new Promise(
            async (resolve, reject) => {
                const canAddUser = name && password;
                
                if (canAddUser) {
                    const user = await new userModel({ name, password }).save();
                    resolve(user);
                } else {
                    reject('Nome e senha são obrigatórios');
                }
            }
        )
    },
}