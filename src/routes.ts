import {
  getTODO,
  itsWorks,
  getMovies,
  getMoviesId,
  postMovies,
  deleteMoviesId,
  updateMovies,
} from "@controllers/todo"
import { getLogin } from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movies", getMovies)
  app.get("/movies/:id", getMoviesId)
  app.get("/login", getLogin)
  app.post("/movies", postMovies)
  app.delete("/movies/:id", deleteMoviesId)
  app.put("/movies/:id", updateMovies)
}
