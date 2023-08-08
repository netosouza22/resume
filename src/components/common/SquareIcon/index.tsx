"use client";

interface ISquareIcon {
  label: string,
  icon: JSX.Element
}

export default function SquareIcon({ label, icon }: ISquareIcon) {


  return (
    <div title={label}>
      {icon}
    </div>

  )
}