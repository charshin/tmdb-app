import { log, chalk, dump } from '@/core/utils/log';

import { getPopularMovies } from '../data/movies';

import MovieCard from './MovieCard';

export default async function MovieList({ pageNo }: { pageNo: number }) {
  const { movies } = await getPopularMovies({ pageNo });
  log.debug(chalk.green(`Popular movies - Page ${pageNo}:\n`), dump(movies));

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
