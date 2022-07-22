import { getTODO, itsWorks } from "@controllers/todo"
import { getLogin, getMovies } from "src"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movies", getMovies)
  app.get("/login", getLogin)
}
