import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { SearchTerm } from './Movies';

const MovieSearchbar = ({ searchTerm, setSearchTerm, refetch }: any) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchTerm((currItem: SearchTerm) => {
      return {
        ...currItem,
        searchText: value,
      };
    });

    refetch();
  };

  return (
    <Wrapper>
      <label htmlFor='search' className='label'>
        Search
      </label>
      <input
        type='search'
        id='search'
        className='searchbar'
        autoFocus={true}
        minLength={3}
        value={searchTerm?.searchText}
        onChange={handleSearchChange}
      />
    </Wrapper>
  );
};

export default MovieSearchbar;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  gap: 1rem;

  .label {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.1rem;
    color: #000;
  }
  .searchbar {
    padding: 1rem;
    font-size: 2rem;
    outline: none;
    border: 0.125rem solid #000;
    border-radius: 0.5rem;
  }
`;
