const express = require("express");

const app = express();

app.get("/api/usuarios", (req: any, res: any) => {
    res.json([
        {
            nombre: "Juan Perez",
            email: "juan@example.com"
        },
        {
            nombre: "Maria Lopez",
            email: "maria@example.com"
        }
    ]);
});

app.listen(3000, () => {
    console.log("Servidor ejecutándose en puerto 3000");
});