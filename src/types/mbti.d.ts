export type Key = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type Type = 'M' | 'B' | 'T' | 'I';

export interface Item {
  key: Key;
  title: string;
  caption: string;
  type: Type;
  bgcolor: string;
  color: string;
  selected: boolean;
}

export interface Result {
  key: string;
  imageSrc: ImageProps;
}
