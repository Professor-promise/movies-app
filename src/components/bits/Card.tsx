import styled from 'styled-components';
import { Heading } from './Text';

const Card = ({ cardInfo }: any) => {
  return (
    <Wrapper>
      {cardInfo.Poster !== 'N/A' ? (
        <>
          <img
            src={cardInfo.Poster}
            alt={cardInfo?.Title}
            className='image-bg'
          />
        </>
      ) : (
        <Heading className='title'>{cardInfo?.Title}</Heading>
      )}
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  padding: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  width: 30rem;
  height: 30rem;
  border-radius: 1.2rem;
  overflow: hidden;
  background: #000000;
  /* border: 0.125rem solid #000000; */
  box-shadow: 0 0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 37.5em) {
    width: 100%;
    height: 100%;
  }

  .image-bg {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .title {
    position: absolute;
    text-align: center;
    margin: 1rem;
  }
`;
