import 'server-only';
import Joi from 'joi';

import { fetchTMDB } from '@/core/api/rest';
import { validate } from '@/core/api/validator';
import { log, chalk, dump, convertMovieDTOToModel, getErrorMessage } from '@/core/utils';
import { Movie as MovieSchema } from '@/core/types/schemas';
import { Movie as MovieDTO } from '@/core/types/dtos';
import { Movie as MovieModel, Pagination as PaginationModel } from '@/core/types/models';
import { PAGE_SIZE } from '@/core/config';

export const getPopularMovies = async ({ pageNo = 1 }: { pageNo?: number }) => {
  try {
    const data = await fetchTMDB(`/movie/popular?language=en-US&page=${pageNo}`);

    log.debug(chalk.green('getPopularMovies'), dump(data));

    const moviesDTO = validate<MovieDTO[]>(
      data?.results || [],
      Joi.array().items(MovieSchema).required(),
    );

    const pagination: PaginationModel = {
      pageNo,
      pageSize: PAGE_SIZE,
      totalCount: data?.total_results || 0,
    };

    return {
      movies: moviesDTO.map(convertMovieDTOToModel),
      pagination,
    };
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
