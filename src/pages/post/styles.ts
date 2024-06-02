import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitlePost = styled.section`
  width: 864px;
  margin-top: -64px;
  padding: 40px 32px 32px 32px;
  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: column;
  gap: 32px;

  div {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      text-decoration: none;
      color: ${(props) => props.theme.blue};
    }

    h2 {
      margin-top: 20px;
      font-weight: 700;
      font-size: 24px;
      color: ${(props) => props.theme['base-title']};
    }
  }
`

export const InfosPost = styled.section`
  display: flex;
  gap: 32px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    font-weight: 16px;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Content = styled.section`
  margin-top: 40px;
  padding: 32px;
  width: 800px;

  p {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
  }
`
