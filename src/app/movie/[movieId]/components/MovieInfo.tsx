import Image from 'next/image';

import { log, chalk, dump } from '@/core/utils/log';
import {
  BACKDROP_ALT_TEXT,
  BACKDROP_DIMENSION,
  POSTER_ALT_TEXT,
  POSTER_DIMENSION,
  BLUR_DATA_URL,
  MAX_CASTS_TO_SHOW,
} from '@/core/config/constants';
import DefaultMovieBackdrop from '@/core/assets/img/movie-backdrop.jpeg';
import DefaultMoviePoster from '@/core/assets/img/movie-poster.jpeg';

import { getMovie } from '../data/movie';

import Cast from './Cast';

export default async function MovieInfo({ movieId }: { movieId: number }) {
  const movie = await getMovie({ movieId });
  const { title, overview, backdrop, poster, runtime, releaseDate } = movie;

  log.debug(chalk.green(`Movie ${movieId}:\n`), dump(movie));

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        style={{ maxWidth: POSTER_DIMENSION.width * 3 }}
        className="grid grid-cols-3 overflow-hidden rounded-md border shadow"
      >
        <div className="col-span-full md:hidden">
          <Image
            className="w-full"
            src={backdrop || DefaultMovieBackdrop}
            alt={BACKDROP_ALT_TEXT}
            width={BACKDROP_DIMENSION.width}
            height={BACKDROP_DIMENSION.height}
            blurDataURL={backdrop ? BLUR_DATA_URL : undefined}
            placeholder="blur"
          />
        </div>
        <div className="col-span-1 max-md:hidden">
          <Image
            src={poster || DefaultMoviePoster}
            alt={POSTER_ALT_TEXT}
            width={POSTER_DIMENSION.width}
            height={POSTER_DIMENSION.height}
            blurDataURL={poster ? BLUR_DATA_URL : undefined}
            placeholder="blur"
          />
        </div>
        <div className="col-span-full md:col-span-2">
          <div className="flex flex-col gap-3 p-5">
            <div className="flex flex-col gap-1">
              <p className="text-3xl">{title}</p>
              {releaseDate && (
                <p className="text-sm text-gray-700">{new Date(releaseDate).toDateString()}</p>
              )}
            </div>
            {runtime && (
              <div>
                <p className="text-lg font-medium">Runtime</p>
                <p className="text-sm">
                  {Math.floor(runtime / 60)}h {runtime % 60}m
                </p>
              </div>
            )}
            <div>
              <p className="text-lg font-medium">Overview</p>
              <p className="text-justify text-sm md:max-lg:line-clamp-6">{overview}</p>
            </div>
          </div>
        </div>
      </div>
      {movie.casts && (
        <div className="flex flex-col gap-7">
          <p className="text-center text-3xl">Top Billed Casts</p>
          <div className="flex flex-wrap justify-center gap-5">
            {movie.casts.slice(0, MAX_CASTS_TO_SHOW).map((cast) => (
              <Cast key={cast.id} {...cast} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
