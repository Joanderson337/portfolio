import { CardProject } from '../../../components/CardProject'
import { mockCardProject } from '../../../mock/cardProject'

export function CardsProjects() {
  return (
    <>
      {mockCardProject.map((data, i) => (
        <CardProject
          key={String(i)}
          link={data.link}
          icon={data.icon}
          bg={data.bg}
          bd={data.bd}
          ct={data.ct}
          title={data.title}
          tecnologia={data.tecnologia}
          descripton={data.descripton}
          visualizar={data.visualizar}
        />
      ))}
    </>
  )
}
