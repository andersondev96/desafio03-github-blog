import { useCallback, useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { api } from '../../lib/axios'
import {
  Content,
  HomeContainer,
  Loading,
  PostsContainer,
  SocialIcons,
  UserBio,
} from './styles'

interface UserProps {
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  login: string
  name: string
}

export function Home() {
  const [user, setUser] = useState<UserProps>()
  const [loading, setLoading] = useState(true)

  const fetchUser = useCallback(async () => {
    try {
      const response = await api.get('/users/andersondev96')

      if (!response.data) {
        throw new Error('User not found')
      }
      setUser(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <HomeContainer>
      {!user || loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <UserBio>
          <img src={user.avatar_url} alt="" />
          <div>
            <div>
              <h1>{user.name}</h1>
              <a href={user?.html_url} target="_blank" rel="noreferrer">
                Github
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <p>{user.bio}</p>

            <SocialIcons>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
                <span>{user.login}</span>
              </a>

              <a href="">
                <i className="fa-solid fa-building"></i>
                <span>{user.company}</span>
              </a>

              <a href="">
                <i className="fa-solid fa-user-group"></i>
                <span>{user.followers} seguidores </span>
              </a>
            </SocialIcons>
          </div>
        </UserBio>
      )}

      <Content>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" />
        <PostsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </PostsContainer>
      </Content>
    </HomeContainer>
  )
}
