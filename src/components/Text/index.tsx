import { TextS } from './style'

interface ITitle {
  titleText: string
  size: number
  cl: string
  weight: number
  sizeW: number
}

export function Text({ titleText, size, cl, weight, sizeW }: ITitle) {
  return (
    <>
      <TextS sizeW={sizeW} weight={weight} size={size} cl={cl}>
        {titleText}
      </TextS>
    </>
  )
}
