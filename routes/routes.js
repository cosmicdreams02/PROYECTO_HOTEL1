const router = require("express").Router();
const user = require("../controllers/user.controller");


router.get("/", user.home);
router.post("/registro", user.registro);
router.post("/login", user.login);
router.post("/reservas", user.reservas);
router.post("/busquedas", user.busquedas);
router.post("/datostarjeta", user.datostarjeta);
router.post("/cancelareservas", user.cancelareservas);
router.post("/historial", user.historial);
router.post("/habitaciones", user.habitaciones);





module.exports = router;