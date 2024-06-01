import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
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

export interface IssuesProps {
  id: string
  number: string
  title: string
  body: string | null
  created_at: string
}

const issueFormParamsFormSchema = z.object({
  search: z.string(),
})

type IssueSearchFormInput = z.infer<typeof issueFormParamsFormSchema>

export function Home() {
  const [user, setUser] = useState<UserProps>()
  const [issues, setIssues] = useState<IssuesProps[]>([])
  const [searchText, setSearchText] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has('search')) {
      return url.searchParams.get('search') ?? ''
    }

    return ''
  })

  const [loading, setLoading] = useState(true)

  const { register, handleSubmit } = useForm<IssueSearchFormInput>({
    resolver: zodResolver(issueFormParamsFormSchema),
  })

  const handleSearchIssues = useCallback(
    async (data: IssueSearchFormInput) => {
      const { search } = data

      const url = new URL(window.location.toString())

      setSearchText(search)

      url.searchParams.set('search', searchText)

      window.history.pushState({}, '', url)
    },
    [searchText],
  )

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

  const fetchIssues = useCallback(async () => {
    const response = await api.get(
      `/search/issues?q=${searchText}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
    )

    setIssues(response.data.items)
  }, [searchText])

  useEffect(() => {
    fetchUser()
    fetchIssues()
  }, [fetchUser, fetchIssues])

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
        <form onSubmit={handleSubmit(handleSearchIssues)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            required
            {...register('search')}
          />
        </form>
        <PostsContainer>
          {issues.map((issue) => {
            return <Card key={issue.id} card={issue} />
          })}
        </PostsContainer>
      </Content>
    </HomeContainer>
  )
}
