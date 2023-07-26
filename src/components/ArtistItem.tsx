import { Link } from "react-router-dom";
import { ArtistType } from "../types";

export const ArtistItem = ({
  id,
  name,
  cover,
}: Pick<ArtistType, "id" | "name" | "cover">) => {
  return (
    <Link className="Artist" to={`artist/${id}`}>
      <div
        style={{
          backgroundImage: `url(${require(`../images/covers/${cover}.jpg`)})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <p>{name}</p>
      </div>
    </Link>
  );
};
