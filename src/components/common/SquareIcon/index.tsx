"use client";

interface ISquareIcon {
  label: string,
  icon: JSX.Element
}

export default function SquareIcon({ label, icon }: ISquareIcon) {


  return (
    <div className="w-[3.75rem] h-[3.75rem] bg-gray-1 flex items-center justify-center">
      <div title={label}>
        {icon}
      </div>
    </div>
  )
}