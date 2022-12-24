import { useState } from 'react';
import { useDisplayMoviesQuery } from '../redux/services/movies-services';
import styled from 'styled-components';
import MovieCategory from './MovieCategory';
import MovieSearchbar from './MovieSearchbar';
import NoData from './bits/NoData';
import LoadingRoller from './bits/LoadingRoller';

export interface SearchTerm {
  searchText?: string;
}

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState<SearchTerm>({
    searchText: '',
  });

  const { data, refetch, isLoading, isSuccess }: any = useDisplayMoviesQuery({
    searchTerm:
      (searchTerm.searchText!.length >= 3 && searchTerm.searchText) ||
      'avengers',
  });

  return (
    <Wrapper>
      <MovieSearchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        refetch={refetch}
      />
      {isLoading ? (
        <LoadingRoller />
      ) : data?.Search ? (
        <>
          <MovieCategory
            data={data?.Search}
            movieCategory={searchTerm}
            isSuccess={isSuccess}
          />
        </>
      ) : (
        <NoData text={`Movie Not Found`} />
      )}
    </Wrapper>
  );
};

export default Movies;

const Wrapper = styled.div`
  padding: 1rem 7.7rem;
`;
