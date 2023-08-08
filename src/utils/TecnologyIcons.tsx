import Image from 'next/image';
import Css from '../assets/css.svg';
import Git from '../assets/git.svg';
import Html from '../assets/html.svg';
import Js from '../assets/js.svg';
import NextJs from '../assets/next-js.svg';
import React from '../assets/react.svg';
import Tailwind from '../assets/tailwind-css.svg';
import Ts from '../assets/ts.svg';
import Vue from '../assets/vue-js.svg';

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
    label: 'Vue Js',
    icon: <Image src={Vue} alt={`Icone da tecnologia Vue Js`} />
  },
  {
    label: 'Next JS',
    icon: <Image src={NextJs} alt={`Icone da tecnologia Next Js`} />
  },
  {
    label: 'Tailwind CSS',
    icon: <Image src={Tailwind} alt={`Icone da tecnologia TailwindCSS`} />
  }


]
