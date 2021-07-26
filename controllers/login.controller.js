const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = "Felipe-token";

const loginController = {
    auth: async (req, res) => {
        let { email, password } = req.body;
        let users = await db.Usuario.findOne({ where: { email: email } });
        if (!users) {
            return res.status(400).send({ error: "Usuario não encontrado!" })
        };
        if (!await bcrypt.compareSync(password, users.password)) {
            return res.status(400).send({ error: "Senha inválida!" })
        }
        let token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 8600 });
        res.status(200).json({ message: "Logado com Sucesso!", token })
    }
};

module.exports = loginController;