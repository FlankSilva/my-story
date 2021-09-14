import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  padding: 5px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 600px;
  height: 100vh;

  svg {
    margin: 1.5px 2px 0 3px; 
  }
`

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const ContentOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 140px;
  height: 70px;
`

export const TitleOptions = styled.h3`
  color: var(--text-title);
  font-size: 15px;
  text-align: center;
  margin-bottom: 5px;
`