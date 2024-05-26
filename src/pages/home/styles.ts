import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100vw;
  }
`

export const UserBio = styled.div`
  width: 864px;
  margin-top: -64px;
  padding: 40px 32px 32px 32px;
  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  align-items: center;
  gap: 32px;

  img {
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 8px;
  }

  div > div:first-child {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      color: ${(props) => props.theme.blue};
    }
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 8px;

    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
  }
`

export const SocialIcons = styled.div`
  margin-top: 24px;

  display: flex;
  gap: 24px;

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Content = styled.main`
  width: 864px;
  margin-top: 72px;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      font-size: 18px;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-weight: 400;
      font-size: 14px;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    margin-top: 12px;
    padding: 16px 12px 12px 12px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    background-color: transparent;

    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
  }
`
