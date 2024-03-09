export interface ItemProps {
  id: number;
  img: string;
  title: string;
  favorite: boolean;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
}

export type HandlerProps = (e: React.ChangeEvent<HTMLInputElement>) => void;
