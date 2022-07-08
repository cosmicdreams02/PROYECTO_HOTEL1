const express = require('express');
const router = require("./routes/routes")
const app = express();
app.use(express.json());
app.use("/", router)
app.listen(5000, () => {
    console.log("*********El servidor está inicializado en el puerto 5000**********");
});



module.exports = router