import Image from 'next/image';
import Link from 'next/link';

import { getMovie } from '@/app/movie/[movieId]/data/movie';
import { log, chalk, dump } from '@/core/utils/log';
import { BLUR_DATA_URL, POSTER_ALT_TEXT, POSTER_DIMENSION } from '@/core/config/constants';
import DefaultMoviePoster from '@/core/assets/img/movie-poster.jpeg';

export default async function MoviePreview({ movieId }: { movieId: number }) {
  const movie = await getMovie({ movieId });
  const { id, title, overview, poster, runtime, releaseDate } = movie;

  log.debug(chalk.green(`Movie ${movieId}:\n`), dump(movie));

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div
      style={{ maxWidth: POSTER_DIMENSION.width * 3 }}
      className="grid grid-cols-3 gap-5 overflow-hidden rounded-md"
    >
      <div className="hidden sm:col-span-1 sm:block">
        <Image
          src={poster || DefaultMoviePoster}
          alt={POSTER_ALT_TEXT}
          width={POSTER_DIMENSION.width}
          height={POSTER_DIMENSION.height}
          blurDataURL={poster ? BLUR_DATA_URL : undefined}
          placeholder="blur"
        />
      </div>
      <div className="col-span-full sm:col-span-2">
        <div className="flex h-full flex-col gap-3">
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
            <p className="text-justify text-sm sm:line-clamp-3 md:line-clamp-5">{overview}</p>
          </div>
          <div className="mt-auto">
            <Link href={`/movie/${id}`} target="_blank">
              <button className="w-full rounded-full bg-sky-700 px-4 py-2 text-sm text-white hover:bg-sky-600 sm:w-auto">
                More details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
