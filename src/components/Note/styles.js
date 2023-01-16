import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }

  .stars {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    margin-bottom: 15px;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`
