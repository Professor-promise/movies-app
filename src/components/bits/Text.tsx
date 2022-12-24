import styled from 'styled-components';

interface HeadingType {
  color?: string;
}

export const Heading = styled.h2<HeadingType>`
  color: ${({ color }: HeadingType) => color ?? '#fff'};
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.1rem;
  text-transform: capitalize;
`;
