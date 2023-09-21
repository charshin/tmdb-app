import MovieList from './components/MovieList';

export default function Page({ params }: { params: { pageNo: string } }) {
  const pageNo = parseInt(params.pageNo) || 1;
  return <MovieList pageNo={pageNo} />;
}
