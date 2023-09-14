import { Eyebrow } from '../../../components/commons/Eyebrow'
import { CardProject } from './CardProject'
import modal from '../../../data/modal.json'

export function Projects() {
  return (
    <>
      <section className="relative bg-baseBege py-40" id="projects">
        <div className="mx-6 pb-16">
          <Eyebrow>MEUS PROJETOS</Eyebrow>
        </div>

        <div className="flex w-full flex-col items-center px-1">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {modal.map((data, index) => (
              <CardProject
                key={index}
                imgUrl={data.imgUrl}
                title={data.title}
                modal={data.modal}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
