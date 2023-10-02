import Image from 'next/image';

import { Cast as CastModel } from '@/core/types/models/cast';
import { PROFILE_ALT_TEXT, PROFILE_DIMENSION, BLUR_DATA_URL } from '@/core/config/constants';
import DefaultMaleCast from '@/core/assets/img/male-cast.jpeg';
import DefaultFemaleCast from '@/core/assets/img/female-cast.jpeg';

export default function Cast({ name, gender, character, profile }: CastModel) {
  return (
    <div
      style={{ width: PROFILE_DIMENSION.width }}
      className="over-hidden rounded-md border shadow"
    >
      <Image
        src={profile || (gender ? DefaultMaleCast : DefaultFemaleCast)}
        alt={PROFILE_ALT_TEXT}
        width={PROFILE_DIMENSION.width}
        height={PROFILE_DIMENSION.height}
        blurDataURL={profile ? BLUR_DATA_URL : undefined}
        placeholder="blur"
      />
      <div className="p-2">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{character}</p>
      </div>
    </div>
  );
}
