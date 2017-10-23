var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
var postMasterController = require('../controllers/postMasterController');
var imagenController = require('../controllers/imagenController');
var assistController = require('../controllers/assistController');

var mailController = require('../controllers/mail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/preregistro')
        .get(userController.createView)
        .post(userController.register);



router.route('/checkemail').get(userController.emailCheck);
router.route('/checkdni').get(userController.dniCheck);
router.route('/lista')
          .get(userController.listUser);
router.route('/asistencia')
          .get(assistController.create);
router.route('/lista_asistencia')
        .get(assistController.getAssist);
router.route('/dias')
        .get(assistController.getDay);
router.route('/Dasist')
        .get(assistController.deleteAssist);

router.route('/postmaster/photo').post(imagenController.create);
router.route('/getPhotos').get(imagenController.getPhotos);


router.route('/.well-known/acme-challenge/:zf2uIh7KIBEFFrKnxQY1jBGH5xEYlY2E6BAz0dMKx6s')
		.get(userController.sslController1)

router.route('/.well-known/acme-challenge/:ziWr--RAg3dYNucCUNNHMJt0nzN5KBueFLRBKI6_K84')
		.get(userController.sslController2)


router.route('/postmaster/preregistro')
          .post(postMasterController.register);
router.route('/postmaster/Dusuarios')
          .get(postMasterController.deleteUsers);
router.route('/postmaster/list')
          .get(postMasterController.checkReniec);
router.route('/postmaster/usuarios')
          .get(postMasterController.getUsers);

router.post('/contacto', mailController.contact);

router.route('/usuarios')
        .get(userController.getUsers);
router.route('/Dusuarios')
        .get(userController.deleteUsers);

router.route('/postmaster')
		.get(postMasterController.createView)
module.exports = router;
