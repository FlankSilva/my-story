import styled from "styled-components";

interface ContainerProps {
  height?: string;
  margin?: string;
}

interface TitleProps {
  size?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${props => props.height ? props.height : '40px'};
  background: var(--green);
  color: var(--shape);
  margin: ${props => props.margin};
`

export const Title = styled.h1<TitleProps>`
  font-size: ${props => props.size};
`