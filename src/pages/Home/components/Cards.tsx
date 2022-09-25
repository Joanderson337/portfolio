import { Card } from '../../../components/Card'
import { mockCard } from '../../../mock/card'

export function Cards() {
  return (
    <>
      {mockCard.map((data, i) => (
        <Card
          key={String(i)}
          icon={data.icon}
          bg={data.bg}
          bd={data.bd}
          title={data.title}
          descripton={data.descripton}
        />
      ))}
    </>
  )
}
