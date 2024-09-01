import "./Card.css";
import { FcLike , FcLikePlaceholder } from "react-icons/fc";

function Card({ allValue, id  , likeBtn , setLikeBtn}) {
  

function likeHandler(){

 
  
  (likeBtn.includes(id) ? setLikeBtn((prev) => prev.filter(((cd) => cd !== id))): ((likeBtn.length === 0 ? setLikeBtn([id]):setLikeBtn((prev) => [...prev , id]))));

  console.log(likeBtn);
}


  return (
    <div className="card_outside">
      <div className="card_image_outside">
        <div className="card_image_inside">
          <img id="card_image" src={allValue.image.url} />
        </div>
        <button className="card_btn" onClick={likeHandler}>
          {
          (likeBtn.includes(id)?<FcLike className="fc_btn" fontSize="1.35rem"/>:<FcLikePlaceholder className="fc_btn" fontSize="1.35rem"/>)
          }
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
