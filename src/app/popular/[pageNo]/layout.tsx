import { log, chalk, dump } from '@/core/utils';

import { getPopularMovies } from './data';
import { MovieNavigation } from './components';

export default async function Layout({
  params,
  children,
}: {
  params: { pageNo: string };
  children: React.ReactNode;
}) {
  const pageNo = parseInt(params.pageNo) || 1;
  const { pagination } = await getPopularMovies({ pageNo });
  log.debug(chalk.green('Pagination'), dump(pagination));

  return (
    <div className="flex flex-col gap-10 p-10">
      {children}
      <MovieNavigation pagination={pagination} />
    </div>
  );
}
