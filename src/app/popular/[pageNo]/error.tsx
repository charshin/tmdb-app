'use client';

import { useEffect } from 'react';

import { log } from '@/core/utils';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    log.error('Encountered error during rendering: ', error);
  }, [error]);

  return (
    <>
      <p>Sorry! We are not able to get the movies at the moment.</p>
      <p>
        Please{' '}
        <span className="cursor-pointer underline" onClick={reset}>
          try again
        </span>{' '}
        later.
      </p>
    </>
  );
}
