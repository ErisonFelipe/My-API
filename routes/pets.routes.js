const { Router } = require('express');
const petsController = require('../controllers/pets.controller');
const router = Router();

router.get("/pets", petsController.All);
router.post("/pets", petsController.create);
router.put("/pets/:id/atualizar", petsController.update);
router.delete("/pets/:id/deletar", petsController.delete);

module.exports = router;