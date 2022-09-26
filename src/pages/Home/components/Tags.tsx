import { Tag } from '../../../components/Tag'

interface ITags {
  dataTags: {
    titleTag: string
    bg: string
    bd: string
  }[]
}

export function Tags({ dataTags }: ITags) {
  return (
    <>
      {dataTags.map((data, i) => (
        <Tag
          key={String(i)}
          titleTag={data.titleTag}
          bg={data.bg}
          bd={data.bd}
        />
      ))}
    </>
  )
}
