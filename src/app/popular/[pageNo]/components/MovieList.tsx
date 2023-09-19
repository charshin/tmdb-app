import { log, chalk, dump } from '@/core/utils';

import { getPopularMovies } from '../data';

import MovieCard from './MovieCard';
import MovieNavigation from './MovieNavigation';

export default async function MovieList({ pageNo }: { pageNo: number }) {
  const { movies, pagination } = await getPopularMovies({ pageNo });
  log.debug(chalk.green(`Popular movies:\nPage ${pageNo}:\n`), dump(movies));

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="flex flex-wrap justify-center gap-10">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <MovieNavigation pagination={pagination} />
    </div>
  );
}
