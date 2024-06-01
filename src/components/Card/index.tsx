/* eslint-disable camelcase */
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { IssuesProps } from '../../pages/home'
import { CardContainer } from './styles'

interface CardProps {
  card: IssuesProps
}

export function Card({ card: { number, title, body, created_at } }: CardProps) {
  return (
    <CardContainer to={`/post/${number}`}>
      <div>
        <h3>{title}</h3>
        <span>
          {formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{body}</p>
    </CardContainer>
  )
}
