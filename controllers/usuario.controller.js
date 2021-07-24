const db = require('../models');
const bcrypt = require('bcrypt');

const UsuarioController = {
    findAll: async (req, res) => {
        let users = await db.Usuario.findAll();
        res.status(200).json(users);
    },
    create: async (req, res) => {
        let { name, email, password } = req.body;
        let hash = bcrypt.hashSync(password, 6);
        let users = await db.Usuario.create({ name, email, password:hash });
        res.json(users);
    },
    update: async (req, res) => {
        let users = await db.Usuario.findByPk(req.params.id);
        let userNew = await users.update(req.body);
        res.json(userNew);
    },
    delete: async (req, res)=> {
        let users = await db.Usuario.findByPk(req.params.id);
        await  users.destroy();
        res.json();
    }
};

module.exports = UsuarioController;


