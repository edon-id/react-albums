import { useParams } from "react-router-dom";
import artists from "../db";
import { ArtistType } from "../types";
import { AlbumsList } from "./AlbumsList";
import { ErrorPage } from "./ErrorPage";

const generateArtist = (id: string | undefined): ArtistType | undefined => {
  if (!id) {
    return undefined;
  }

  return artists.find((artist) => artist.id === +id);
};

export const ArtistPage = () => {
  const { id } = useParams();

  const selectedArtist = generateArtist(id);

  if (!selectedArtist) {
    return <ErrorPage />;
  }

  return (
    <div>
      <img
        className="pic-frame"
        src={require(`../images/covers/${selectedArtist?.cover}.jpg`)}
        alt="cover"
      />
      <h2 className="text-center">{selectedArtist?.name}</h2>
      <p>{selectedArtist?.bio}</p>
      <div className="d-flex flex-wrap">
        {selectedArtist?.albums?.map(({ cover, albumId }) => (
          <AlbumsList albumId={albumId} key={cover} cover={cover} />
        ))}
      </div>
    </div>
  );
};
