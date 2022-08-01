import { Movies } from "@models/entity/Movies"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovies = async (request, response) => {
  try {
    const movieRepository = getRepository(Movies)
    const findMovie = await movieRepository.find()
    return response.status(200).json(findMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}
export const getLogin = (request, response) => {
  return response.json({
    login: ["emilly"],
    senha: ["senha333"],
  })
}

export const getMoviesId = async (request, response) => {
  try {
    const { id } = request.params
    const movieRepository = getRepository(Movies)
    const findMovie = await movieRepository.findOne(id)

    return response.status(200).json(findMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}
