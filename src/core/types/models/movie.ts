import { Cast } from './cast';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop: string | null;
  poster: string | null;
  runtime?: number;
  releaseDate?: string;
  casts?: Cast[];
}
