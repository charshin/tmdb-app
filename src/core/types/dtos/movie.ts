/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

import { Cast } from './cast';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  runtime?: number;
  release_date?: string;
  credits?: {
    cast: Cast[];
    /**
     * Unknown Property
     */
    [x: string]: unknown;
  };
  /**
   * Unknown Property
   */
  [x: string]: unknown;
}
