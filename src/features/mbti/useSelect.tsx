import {useCallback, useState} from 'react';
import type {Key} from 'src/types/mbti';

type MBTI = {
  M: '' | 'E' | 'I';
  B: '' | 'N' | 'S';
  T: '' | 'T' | 'F';
  I: '' | 'P' | 'J';
};

export default function UseSelect() {
  const [selected, setSelected] = useState<MBTI>({
    M: '',
    B: '',
    T: '',
    I: '',
  });

  const select = useCallback(
    (el: Key) => {
      switch (el) {
        case 'E':
        case 'I':
          setSelected({...selected, M: el});
          break;

        case 'N':
        case 'S':
          setSelected({...selected, B: el});
          break;

        case 'F':
        case 'T':
          setSelected({...selected, T: el});
          break;

        case 'P':
        case 'J':
          setSelected({...selected, I: el});
          break;

        default:
          break;
      }
    },
    [selected],
  );

  return {
    select,
    selected,
  };
}
