import CoverImage from '../../assets/cover.png'
import { Content, HomeContainer, SocialIcons, UserBio } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <img src={CoverImage} alt="Cover" />

      <UserBio>
        <img src="https://github.com/andersondev96.png" alt="" />
        <div>
          <div>
            <h1>Cameron Williamson</h1>
            <a href="">
              Github
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <SocialIcons>
            <a href="">
              <i className="fa-brands fa-github"></i>
              <span>cameronwll</span>
            </a>

            <a href="">
              <i className="fa-solid fa-building"></i>
              <span>Rocketseat</span>
            </a>

            <a href="">
              <i className="fa-solid fa-user-group"></i>
              <span>32 seguidores</span>
            </a>
          </SocialIcons>
        </div>
      </UserBio>
      <Content>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" />
      </Content>
    </HomeContainer>
  )
}
