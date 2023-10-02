import { Movie as MovieDTO } from '@/core/types/dtos/movie';
import { Movie as MovieModel } from '@/core/types/models/movie';

export const convertMovieDTOToModel = ({
  id,
  title,
  overview,
  backdrop_path,
  poster_path,
  runtime,
  release_date,
  credits,
}: MovieDTO): MovieModel => ({
  id,
  title,
  overview,
  backdrop: backdrop_path && `${process.env.NEXT_PUBLIC_BACKDROP_BASE_URL}${backdrop_path}`,
  poster: poster_path && `${process.env.NEXT_PUBLIC_POSTER_BASE_URL}${poster_path}`,
  runtime,
  releaseDate: release_date,
  casts: credits?.cast.map(({ id, name, gender, character, profile_path }) => ({
    id,
    name,
    gender,
    character,
    profile: profile_path && `${process.env.NEXT_PUBLIC_PHOTO_BASE_URL}${profile_path}`,
  })),
});
