export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovies = (request, response) => {
  return response.json({
    movies: ["Thor", "Malevola", "As tranças do rei careca"],
  })
}
export const getLogin = (request, response) => {
  return response.json({
    login: ["emilly@gmail"],
    senha: ["12345"],
  })
}

export const getId = (request, response) => {
  //pegar id com mapeamento de api
}
