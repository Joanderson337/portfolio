import { DescriptionS, Container } from './style'

interface IDescripton {
  descriptonText: string
}

export function Description({ descriptonText }: IDescripton) {
  return (
    <Container>
      <DescriptionS>{descriptonText}</DescriptionS>
    </Container>
  )
}
