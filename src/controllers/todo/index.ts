import { Movies } from "@models/entity/Movies"
import { User } from "@models/entity/User"
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
export const getLogin = async (request, response) => {
  const userRepository = getRepository(User)
  const findUser = await userRepository.find()
  return response.json(findUser)
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

export const postMoviesId = async (request, response) => {
  const {
    title,
    subtitle,
    resume,
    releaseDate,
    image,
    director,
    writer,
    classification,
    studio,
    stars,
  } = request.body
  const movieRepository = getRepository(Movies)
  const findMovie = await movieRepository.insert
  return response.json(findMovie)
}
