const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("¡Despliegue exitoso en Cloudzilla!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
