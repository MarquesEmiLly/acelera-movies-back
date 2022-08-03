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

export const postMovies = async (request, response) => {
  try {
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
      note,
    } = request.body
    const movieRepository = getRepository(Movies)
    const findMovie = movieRepository.create({
      title,
      subtitle,
      resume,
      releaseDate,
      image,
      director,
      writer,
      classification,
      studio,
      note,
    })
    const saveMovies = await movieRepository.save(findMovie)
    return response.status(200).json(saveMovies)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const deleteMoviesId = async (request, response) => {
  try {
    const { id } = request.params
    const movieRepository = getRepository(Movies)
    const deleteMovie = await movieRepository.delete(id)

    return response.status(200).json(deleteMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}
export const updateMovies = async (request, response) => {
  try {
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
      note,
    } = request.body
    const { id } = request.params
    const updateMoviesId = getRepository(Movies)
    const movie = await updateMoviesId.findOne(id)
    movie.title = title

    movie.subtitle = subtitle

    movie.resume = resume

    movie.releaseDate = releaseDate

    movie.image = image

    movie.director = director

    movie.writer = writer

    movie.classification = classification

    movie.studio = studio

    movie.note = note

    const result = await updateMoviesId.save(movie)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}
