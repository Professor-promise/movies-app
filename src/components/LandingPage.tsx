import styled from 'styled-components';

import BackgroundImage from '../assets/img/bg.png';

const LandingPage = () => {
  return (
    <Wrapper>
      <h1>Watch something incredible.</h1>
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  background-image: url('${BackgroundImage}');
  background-size: cover;
  background-repeat: no-repeat;
  height: 55rem;
  padding: 11rem 7rem;

  @media only screen and (max-width: 56.25em) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 7.2rem;
    line-height: 9.4rem;
    letter-spacing: -0.05em;
    width: 40rem;

    @media only screen and (max-width: 56.25em) {
      text-align: center;
    }
  }
`;
