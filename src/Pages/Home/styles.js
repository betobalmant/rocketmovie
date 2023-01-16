import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 24px 0;
  }
`

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 80px;

  .mymovie {
    display: grid;
    grid-template-columns: auto 207px;
    grid-template-areas: 'area1 area2';
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    > h1 {
      grid-area: area1;
      font-size: 32px;
      font-weight: 400;
    }
  }
`
