import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 32px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-weight: 700;
      font-size: 20px;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-weight: 400;
      font-size: 14px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
