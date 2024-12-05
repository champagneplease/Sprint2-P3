import express from "express";
import { connectDB } from "./config/dbConfig.mjs";
import superHeroRoutes from "./routes/superHeroRoutes.mjs";
import expressLayouts from "express-ejs-layouts";
import superHeroViewsRoutes from "./routes/superHeroViewsRoutes.mjs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressLayouts);
app.use(express.static(path.resolve("./public")));
app.use(express.json());
app.set("layout", "layout");
app.set("view engine", "ejs");

connectDB();
app.use("/", superHeroViewsRoutes);
app.use("/api", superHeroRoutes);

app.use((req, res) => {
  res.status(404).send({ mensaje: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT} `);
});
