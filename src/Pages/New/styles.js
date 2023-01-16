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
    margin-top: 40px;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    > button:first-child {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 16px;
  }
`

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 0 80px;

  > header {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 36px;

    h1 {
      margin-top: 24px;
    }
  }
`
