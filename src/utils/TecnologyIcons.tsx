import Image from 'next/image';
import Css from '../assets/css.svg';
import Git from '../assets/git.svg';
import Html from '../assets/html.svg';
import Js from '../assets/js.svg';
import React from '../assets/react.svg';
import Ts from '../assets/ts.svg';

interface ITecnologies {
  label: string,
  icon: any,
}

export const tecnologyIcons: ITecnologies[] = [
  {
    label: "CSS 3",
    icon: <Image src={Css} alt={`Icone da tecnologia CSS3`} />

  },
  {
    label: "Javascript",
    icon: <Image src={Js} alt={`Icone da tecnologia Javascript`} />
  },
  {
    label: 'HTML 5',
    icon: <Image src={Html} alt={`Icone da tecnologia HML5`} />
  },
  {
    label: 'GIT',
    icon: <Image src={Git} alt={`Icone da tecnologia GIT`} />
  },
  {
    label: "React Js",
    icon: <Image src={React} alt={`Icone da tecnologia REACT JS`} />
  },
  {
    label: 'Typescript',
    icon: <Image src={Ts} alt={`Icone da tecnologia Typescript`} />
  },
  {
    label: 'a',
    icon: <Image src={Ts} alt={`Icone da tecnologia Typescript`} />
  },
  {
    label: 'b',
    icon: <Image src={Ts} alt={`Icone da tecnologia Typescript`} />
  }


]
