import styled from 'styled-components';
import { Heading } from './bits/Text';
import Card from './bits/Card';

interface MovieCategoryProps {
  Title?: string;
  Poster?: string;
}

const MovieCategory = ({ data, movieCategory }: any) => {
  console.log(movieCategory);
  return (
    <Wrapper>
      <Heading color='#000' className='movie-category'>
        {movieCategory.searchText || 'Avengers'}
      </Heading>

      <div className='card__container'>
        {data.map((items: MovieCategoryProps, index: number) => (
          <Card cardInfo={items} key={index} />
        ))}
      </div>
    </Wrapper>
  );
};

export default MovieCategory;

const Wrapper = styled.div`
  padding: 1rem 0;

  .movie-category {
    font-weight: 600;
  }

  .card__container {
    margin: 2rem 0;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }
`;
