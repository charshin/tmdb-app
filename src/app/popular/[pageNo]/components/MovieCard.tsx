import Image from 'next/image';
import Link from 'next/link';

import type { Movie as MovieModel } from '@/core/types/models/movie';
import { BACKDROP_ALT_TEXT, BACKDROP_DIMENSION, BLUR_DATA_URL } from '@/core/config/constants';
import DefaultMovieBackdrop from '@/core/assets/img/movie-backdrop.jpeg';

export default function MovieCard({ id, title, backdrop, releaseDate }: MovieModel) {
  return (
    <Link href={`/movie/${id}`} scroll={false}>
      <div
        style={{ width: BACKDROP_DIMENSION.width }}
        className="overflow-hidden rounded-md border shadow transition-transform hover:scale-105"
      >
        <Image
          src={backdrop || DefaultMovieBackdrop}
          alt={BACKDROP_ALT_TEXT}
          width={BACKDROP_DIMENSION.width}
          height={BACKDROP_DIMENSION.height}
          blurDataURL={backdrop ? BLUR_DATA_URL : undefined}
          placeholder="blur"
        />
        <div className="p-4">
          <p className="my-1 text-lg font-semibold">{title}</p>
          {releaseDate && <p className="text-gray-500">{new Date(releaseDate).toDateString()}</p>}
        </div>
      </div>
    </Link>
  );
}
