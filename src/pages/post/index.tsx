import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useCallback, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { api } from '../../lib/axios'
import { Content, InfosPost, PostContainer, TitlePost } from './styles'

interface Post {
  id: string
  number: string
  title: string
  body: string | null
  comments: number
  created_at: string
  html_url: string
  user: {
    login: string
  }
}

export function Post() {
  const [post, setPost] = useState<Post>()

  const { number } = useParams()

  const fetchPost = useCallback(async () => {
    const response = await api.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${number}`,
    )

    setPost(response.data)
  }, [number])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return !post ? (
    <h1>Carregando</h1>
  ) : (
    <PostContainer>
      <TitlePost>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>

          <a href={post.html_url} target="_blank" rel="noreferrer">
            Ver no Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h2>{post.title}</h2>
        <InfosPost>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post.user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendar} />
            {formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} {post.comments <= 1 ? 'comentário' : 'comentários'}
          </span>
        </InfosPost>
      </TitlePost>
      <Content>
        <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
      </Content>
    </PostContainer>
  )
}
