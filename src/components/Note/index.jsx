import { Container } from './styles'
import { Tag } from '../Tag'

export function Note({ data, ...rest }) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div className='stars'>
        <img src={data.img} />
        <img src={data.img} />
        <img src={data.img} />
        <img src={data.img} />
        <img src={data.img} />
      </div>
      <p>{data.p}</p>

      {
        data.tags &&
        <footer>
          { 
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}