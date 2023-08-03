import Css from '@/assets/css.svg';
import Git from '@/assets/git.svg';
import Html from '@/assets/html.svg';
import Js from '@/assets/js.svg';
import React from '@/assets/react.svg';
import Ts from '@/assets/ts.svg';

interface ITecnologies {
  label: string,
  icon: JSX.Element,
}

export const tecnologyIcons: ITecnologies[] = [
  {
    label: "CSS 3",
    icon: <Css />
  },
  {
    label: "Javascript",
    icon: <Js />
  },
  {
    label: 'HTML 5',
    icon: <Html />
  },
  {
    label: 'HTML 5',
    icon: <Git />
  },
  {
    label: "React Js",
    icon: <React />
  },
  {
    label: 'Typescript',
    icon: <Ts />
  }


]
