export interface Movie {
  id: number;
  title: string;
  backdrop: string | null;
  poster: string | null;
  releaseDate?: string;
}
