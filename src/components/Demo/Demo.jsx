import "./Demo.css";
import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <div className="profile-link">
      <p>
      Données actuelles:  "mocked"
        (aucune modification)
        <br></br>
        Avec API, (mettre en commentaire les données "mocked" et dé-commenter les données API):
      </p>
      <div className="demo">
        <Link className="btn" to="/user/12">
          <div> Karl </div>
        </Link>
        <Link className="btn" to="/user/18">
          <div> Cécilia </div>
        </Link>
      </div>
    </div>
  );
}
