import { log, chalk, dump } from '@/core/utils/log';

import { getPopularMovies } from './data/movies';
import MovieNavigation from './components/MovieNavigation';

export default async function Layout({
  params,
  children,
  preview,
}: {
  params: { pageNo: string };
  children: React.ReactNode;
  preview: React.ReactNode;
}) {
  const pageNo = parseInt(params.pageNo) || 1;
  const { pagination } = await getPopularMovies({ pageNo });
  log.debug(chalk.green('Pagination'), dump(pagination));

  return (
    <div className="flex flex-col gap-10">
      {preview}
      {children}
      <MovieNavigation pagination={pagination} />
    </div>
  );
}
