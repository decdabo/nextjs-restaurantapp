import { home } from "../data/menu";

export const filterMenu = ( food ) => {
  if (!food) return home;

  return home.filter( item => item.food === food );
}