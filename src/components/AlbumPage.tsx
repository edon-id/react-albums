import { useParams } from "react-router-dom";
import artists from "../db";
import { Album } from "../types/index";
import { ErrorPage } from "./ErrorPage";

const generateAlbum = (
  id: string | undefined,
  albumId: string | undefined
): Album | undefined => {
  if (!id) {
    return undefined;
  }

  return artists
    .find((artist) => artist.id === +id)
    ?.albums.find((album) => album.albumId === albumId);
};

export const AlbumPage = () => {
  const { id, albumId } = useParams();

  const artistAlbum = generateAlbum(id, albumId);

  if (!artistAlbum) {
    return <ErrorPage />;
  }

  return (
    <div className="text-center AlbumInfo">
      <img
        className="pic-frame"
        src={require(`../images/albums/${artistAlbum?.cover}.jpg`)}
        alt="album-cover"
      />
      <p>
        Title: <span>{artistAlbum?.title}</span>
      </p>
      <p>
        Year: <span>{artistAlbum?.year}</span>
      </p>
      <p>
        Price: <span>{artistAlbum?.price}$</span>
      </p>
    </div>
  );
};
