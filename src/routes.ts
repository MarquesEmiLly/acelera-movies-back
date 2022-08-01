import { getTODO, itsWorks } from "@controllers/todo"
import { getMovies, getLogin } from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movies", getMovies)
  app.get("/login", getLogin)
}
