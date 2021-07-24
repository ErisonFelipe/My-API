const {Router} = require('express');
const UsuarioController = require('../controllers/usuario.controller');
const router =  Router();

router.get('/usuarios', UsuarioController.findAll);
router.post('/usuarios', UsuarioController.create);
router.put('/usuarios/:id/atualizar', UsuarioController.update);
router.delete('/usuarios/:id/deletar', UsuarioController.delete);

module.exports = router;
