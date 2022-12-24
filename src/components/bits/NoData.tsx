import styled from 'styled-components';

import NoDataImg from '../../assets/img/no-data.png';

interface NoDataProps {
  text?: string;
}

const NoData = ({ text }: NoDataProps) => {
  return (
    <Wrapper>
      <img src={NoDataImg} alt='No data available' />
      <span className='mt-4'>{text}&nbsp;</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  gap: 0.5rem;
  text-transform: none;
`;
export default NoData;
