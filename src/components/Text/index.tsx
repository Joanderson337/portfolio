import { TextS } from './style'

interface ITitle {
  titleText: string
  size: number
  cl: string
  weight: number
}

export function Text({ titleText, size, cl, weight }: ITitle) {
  return (
    <>
      <TextS weight={weight} size={size} cl={cl}>
        {titleText}
      </TextS>
    </>
  )
}
