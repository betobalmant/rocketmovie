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
    padding: 64px 0;
  }
`

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 80px;

  > button:first-child {
    align-self: flex-start;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  .namemovie {
    display: flex;
    align-items: center;
    padding-top: 24px;
    gap: 13px;

    > h1 {
      font-size: 36px;
      font-weight: 500;
    }

    > img {
      width: 20px;
      height: 20px;
    }
  }

  .datatime {
    display: flex;
    align-items: center;
    padding-top: 24px;
    gap: 13px;

    > img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }

  .tags {
    display: flex;
    align-items: center;
    padding-top: 40px;
    gap: 8px;
    margin-bottom: 40px;
  }
`
