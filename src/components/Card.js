import "./Card.css";
import { FcLike } from "react-icons/fc";

function Card({ allValue, id }) {
  return (
    <div className="card_outside">
      <div className="card_image_outside">
        <div className="card_image_inside">
          <img id="card_image" src={allValue.image.url} />
        </div>
        <button className="card_btn">
          <FcLike id="card_btn_icon" />
        </button>
      </div>

      <div id="card_text">
        <h3 id="card_h3">{allValue.title}</h3>
        <p>
          {allValue.description.length > 100
            ? allValue.description.substr(0, 100)
            : allValue.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
