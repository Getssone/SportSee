import "./Demo.css";
import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <div className="profile-link">
      <p>
        Acruellement en avec des données mockées
        (aucune modification)
        <br></br>
        Avec API, (mettre en commentaire les données mockées et décomanter les donnée API):
      </p>
      <div className="demo">
        <Link className="btn" to="/user/12">
          <div>User 12</div>
        </Link>
        <Link className="btn" to="/user/18">
          <div>User 18</div>
        </Link>
      </div>
    </div>
  );
}
