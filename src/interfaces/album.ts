export interface IAlbum {
  id: number;
  title: string;
  wallpaper: boolean;
  art: boolean;
}

export enum AlbumImageType {
  ART = 'art',
  WALLPAPER = 'wallpaper'
}