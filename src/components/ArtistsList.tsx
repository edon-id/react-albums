import artists from "../db";
import { ArtistItem } from "./ArtistItem";

export const ArtistsList = () => {
  return (
    <div>
      <h2 className="text-center my-3">Browse the artists</h2>
      {artists.map((artist) => (
        <ArtistItem key={artist.id} id={artist.id} name={artist.name} cover={artist.cover} />
      ))}
    </div>
  );
};
