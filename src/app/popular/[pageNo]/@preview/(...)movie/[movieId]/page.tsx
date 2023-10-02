import MoviePreview from './components/MoviePreview';

export default function Page({ params }: { params: { movieId: string } }) {
  const movieId = parseInt(params.movieId);
  return <MoviePreview movieId={movieId} />;
}
