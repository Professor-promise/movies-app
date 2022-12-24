import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <a href='#home' className='logo'>
        MyTestApp
      </a>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  height: 13rem;
  background: #292929;
  color: #fff;
  padding: 4rem 7.7rem;

  @media only screen and (max-width: 56.25em) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    text-decoration: none;
    color: inherit;
    font-family: 'Times New Roman', Times, serif;
    font-size: 3.5rem;
    border: 2px solid #fff;
    padding: 1rem 2rem;
  }
`;
