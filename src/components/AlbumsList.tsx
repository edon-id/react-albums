import { Album } from "../types/index";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const AlbumsList = ({
  cover,
  albumId,
}: Pick<Album, "cover" | "albumId">) => {
  const { id } = useParams();

  return (
    <Link
      to={`/artist/${id}/${albumId}`}
      style={{
        backgroundImage: `url(${require(`../images/albums/${cover}.jpg`)})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        aspectRatio: "1/1",
        flexBasis: "50%",
      }}
    />
  );
};
