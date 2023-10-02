import 'server-only';

import { fetchTMDB } from '@/core/api/rest';
import { validate } from '@/core/api/validator';
import { convertMovieDTOToModel } from '@/core/utils/data';
import { log, chalk, dump } from '@/core/utils/log';
import { getErrorMessage } from '@/core/utils/error';
import { Movie as MovieSchema } from '@/core/types/schemas/movie';
import { Movie as MovieDTO } from '@/core/types/dtos/movie';

export const getMovie = async ({ movieId }: { movieId: number }) => {
  try {
    const data = await fetchTMDB(`/movie/${movieId}?append_to_response=credits`);

    log.debug(chalk.green('getMovie'), dump(data));

    const movieDTO = validate<MovieDTO>(data, MovieSchema);

    return convertMovieDTOToModel(movieDTO);
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
