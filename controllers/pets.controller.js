const db = require('../models');

const petsController = {
    All:  async (req, res)=>{
        let pets = await db.Pets.findAll();
        res.status(200).json(pets);
    },
    create: async (req, res) => {
        let { id, nome, especie, tempo, lugar } = req.body;
        let pets = await db.Pets.create({id, nome, especie, tempo, lugar });
        res.json(pets);
    },
    update: async (req, res) => {
        let pets = await db.Pets.findByPk(req.params.id);
        console.log(pets);
        let petNew = await pets.update(req.body);
        res.json();
    },
    delete: async (req, res)=> {
        let pets = await db.Pets.findByPk(req.params.id);
        await  pets.destroy();
        res.json();
    }
}

module.exports = petsController;