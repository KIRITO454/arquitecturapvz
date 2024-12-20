import { DataSource } from "typeorm";
import Genero from "../app/models/Genero.js";
import Plataforma from "../app/models/Plataforma.js";
import Reseña from "../app/models/Reseña.js";
import Videojuego from "../app/models/Videojuego.js";
import VideojuegosGeneros from "../app/models/VideojuegosGeneros.js";
import VideojuegosPlataformas from "../app/models/VideojuegosPlataformas.js";



const AppDataSource = new DataSource({
  type: "mysql",
  host: "kiritoasu.mysql.database.azure.com",
  username: "kirito45", 
  password: "asuna45-", 
  database: "videojuegos_db",
  ssl: true,
  synchronize: false, 
  logging: false,
  entities: [ Genero, Plataforma, Reseña, Videojuego, VideojuegosGeneros, VideojuegosPlataformas],
});

export default AppDataSource;
