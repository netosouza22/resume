
interface ISquareIcon {
  tecnology: {
    label: string,
    icon: JSX.Element,
  }
}

export default function SquareIcon({ tecnology }: ISquareIcon) {
  return (
    <div className="w-[3.75rem] h-[3.75rem] bg-gray-1" >
      <div title={tecnology.label}>
        {tecnology.icon}
      </div>
    </div>
  )
}