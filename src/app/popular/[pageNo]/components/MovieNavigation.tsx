'use client';

import { useRouter } from 'next/navigation';

import Pager from '@/core/components/Pager';
import { Pagination as PaginationModel } from '@/core/types/models/pagination';

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
