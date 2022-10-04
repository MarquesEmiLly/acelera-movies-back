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
/*
export const Login = async (request, response) => {
  const { saveLogin, password } = request.body
  if (saveLogin && password === "banana") {
    return response.json({ auth: true, message: "logado com sucesso" })
    // return response.json(Movies)
  }
  const userRepository = getRepository(User)
  const findUser = await userRepository.find()
  return findUser
  return response.json({ message: "não foi feito login" })
  */
export const Login = async (request, response) => {
  const requisição = request.body
  if (
    requisição.nome === "emillymarques96622@gmail.com" ||
    requisição.senha === "banana"
  ) {
    return response.json({ Message: "veio algo", auth: true })
  }
  return response.json({ Message: "não veio nada", auth: false })
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
      gender,
      classification,
      subtitle,
      image,
      releaseDate,
      director,
      writer,
      studio,
      actor,
      resume,
      awards,
      note,
    } = request.body
    const movieRepository = getRepository(Movies)
    const findMovie = movieRepository.create({
      title,
      gender,
      classification,
      subtitle,
      image,
      releaseDate,
      director,
      writer,
      studio,
      actor,
      resume,
      awards,
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
    if (title) {
      movie.title = title
    }
    if (subtitle) {
      movie.subtitle = subtitle
    }
    if (resume) {
      movie.resume = resume
    }
    if (releaseDate) {
      movie.releaseDate = releaseDate
    }
    if (image) {
      movie.image = image
    }
    if (director) {
      movie.director = director
    }
    if (writer) {
      movie.writer = writer
    }
    if (classification) {
      movie.classification = classification
    }
    if (studio) {
      movie.studio = studio
    }
    if (note) {
      movie.note = note
    }
    const result = await updateMoviesId.save(movie)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}
