const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = "Felipe-token";

const UsuarioController = {
    findAll: async (req, res) => {
        let users = await db.Usuario.findAll();
        res.status(200).json(users);
    },
    create: (req, res) => {
         db.Usuario.findOne({ email: req.body.email })
            .then((usuario) => {
                if (usuario) {
                    res.status(400).json({
                        message: "Email já está existe em nosso banco de dados!"
                    })
               } else {
                   {
                let { name, email, password } = req.body;
                let hash = bcrypt.hashSync(password, 6);
                let users =  db.Usuario.create({ name, email, password: hash });
                res.status(200).json({message: "Cadastrado com  sucesso!", token});
           }
       }
    })
        
        
    },
    update: async (req, res) => {
        let users = await db.Usuario.findByPk(req.params.id);
        let userNew = await users.update(req.body);
        res.json(userNew);
    },
    delete: async (req, res) => {
        let users = await db.Usuario.findByPk(req.params.id);
        await users.destroy();
        res.json();
    }
};

module.exports = UsuarioController;


    

    // let hash = bcrypt.hashSync(password, 6);
    //     let users =  db.Usuario.create({ name, email, password: hash });
    //     res.status(200).json({message: "Cadastrado com  sucesso!"});
    // let token = jwt.sign({ user: id }, SECRET, { expiresIn: 8600 });