import { Movie as MovieDTO } from '@/core/types/dtos';
import { Movie as MovieModel } from '@/core/types/models';

export const convertMovieDTOToModel = ({
  id,
  title,
  backdrop_path,
  poster_path,
  release_date,
}: MovieDTO): MovieModel => ({
  id,
  title,
  backdrop: backdrop_path && `${process.env.NEXT_PUBLIC_BACKDROP_BASE_URL}${backdrop_path}`,
  poster: poster_path && `${process.env.NEXT_PUBLIC_BACKDROP_BASE_URL}${poster_path}`,
  releaseDate: release_date,
});
