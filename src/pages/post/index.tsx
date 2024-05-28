import { Link } from 'react-router-dom'
import { Content, InfosPost, PostContainer, TitlePost } from './styles'

export function Post() {
  return (
    <PostContainer>
      <TitlePost>
        <div>
          <Link to="/">Voltar</Link>

          <a href="#">Ver no Github</a>
        </div>
        <h2>JavaScript data types and data structures</h2>
        <InfosPost>
          <span>cameronwll</span>
          <span>Há 1 dia</span>
          <span>5 comentários</span>
        </InfosPost>
      </TitlePost>
      <Content>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </Content>
    </PostContainer>
  )
}
