import MovieInfo from './components/MovieInfo';

export default function Page({ params }: { params: { movieId: string } }) {
  const movieId = parseInt(params.movieId);
  return <MovieInfo movieId={movieId} />;
}
