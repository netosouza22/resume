import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between align-middle pt-6">
      <div className="text-black text-5xl font-bold">
        NETO
      </div>

      <nav className="flex items-center">
        <ul className="flex space-x-10 text-gray-8 text-base font-medium">
          <li>
            <Link href={"#about-me"}>
              Sobre mim
            </Link>
          </li>
          <li>
            <Link href={"#work-experience"}>
              Experiências
            </Link>
          </li>
          <li>
            <Link href={"#education"}>
              Formação
            </Link>
          </li>
          <li>
            <Link href={"#contact-me"}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}