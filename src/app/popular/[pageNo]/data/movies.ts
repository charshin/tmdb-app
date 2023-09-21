import 'server-only';
import Joi from 'joi';

import { fetchTMDB } from '@/core/api/rest';
import { validate } from '@/core/api/validator';
import { convertMovieDTOToModel } from '@/core/utils/data';
import { log, chalk, dump } from '@/core/utils/log';
import { getErrorMessage } from '@/core/utils/error';
import { Movie as MovieSchema } from '@/core/types/schemas/movie';
import { Movie as MovieDTO } from '@/core/types/dtos/movie';
import { Movie as MovieModel } from '@/core/types/models/movie';
import { Pagination as PaginationModel } from '@/core/types/models/pagination';
import { PAGE_SIZE } from '@/core/config/constants';

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
