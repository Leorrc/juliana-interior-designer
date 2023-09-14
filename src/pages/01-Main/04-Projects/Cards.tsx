interface CardSaveProps {
  imgUrl: string
  title: string
}

export function CardSave({ imgUrl, title }: CardSaveProps) {
  return (
    <>
      <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
        <img
          src={imgUrl}
          alt="index"
          className="w-full align-middle transition duration-300 ease-linear"
        />

        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-end justify-start">
            <h5 className="m-6 text-lg font-bold text-white">{title}</h5>
          </div>
        </div>
      </div>
    </>
  )
}
