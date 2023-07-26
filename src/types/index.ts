export type ArtistType = {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: Album[];
};

export type Album = {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;
}

