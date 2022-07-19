const router = require("express").Router();
const user = require("../controllers/user.controller");


router.get("/", user.home);
router.post("/registro", user.registro);
router.post("/login", user.login);
router.post("/reservas", user.reservas);
router.post("/datostarjeta", user.datostarjeta);
router.post("/datoscontacto", user.datoscontacto);
router.post("/cancelareservas", user.cancelareservas);
router.post("/historial", user.historial);





module.exports = router;