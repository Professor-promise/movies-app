import { baseApi } from './base-services';

export interface SearchString {
  searchTerm?: string;
}

export const moviesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    displayMovies: builder.query<any, SearchString>({
      query: ({ searchTerm }) => ({
        url: `?s=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`,
      }),
    }),
  }),
});

export const { useDisplayMoviesQuery } = moviesApi;
