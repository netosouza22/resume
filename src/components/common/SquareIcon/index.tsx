"use client";

interface ISquareIcon {
  label: string,
  icon: JSX.Element
}

export default function SquareIcon({ label, icon }: ISquareIcon) {


  return (
    <>
      {
        label === "GIT" ?
          <a
            title={label}
            className="relative hover:scale-105 hover:cursor-pointer z-10
              before:absolute before:w-3 before:h-3 before:bg-pb before:z-20 before:top-0 before:right-0
              before:rounded-full before:animate-pulse before:animate-bounce"
            href="https://github.com/netosouza22"
            target="_blank" >
            {icon}
          </a>
          :
          <div title={label} >
            {icon}
          </div>
      }
    </>

  )
}