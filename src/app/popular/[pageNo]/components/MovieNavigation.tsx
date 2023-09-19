'use client';
import { useRouter } from 'next/navigation';

import { Pager } from '@/core/components';
import { Pagination as PaginationModel } from '@/core/types/models';

export default function MovieNavigation({ pagination }: { pagination: PaginationModel }) {
  const router = useRouter();

  return (
    <Pager
      {...pagination}
      onPageChange={(page) => {
        router.push(`${page}`);
      }}
    />
  );
}
