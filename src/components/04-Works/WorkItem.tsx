interface PropsWorks {
  imgUrl: string
  title: string
  description: string
}

export function WorkItem({ imgUrl, title, description }: PropsWorks) {
  return (
    <div className="flex basis-1/2 flex-col">
      <img
        className=" transform transition-all duration-1000 hover:scale-125"
        src={imgUrl}
      />
      <div className="flex flex-col self-stretch pt-6">
        <h3 className="font-display text-display-md pb-4">{title}</h3>
        <p className="text-body-lg font-light text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  )
}
