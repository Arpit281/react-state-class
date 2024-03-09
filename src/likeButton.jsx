import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let tooggleLike = () => {
    setIsLiked(!isLiked);
    console.log("clicked");
  };

  let likeStyle = {
    color: "red",
  };

  return (
    <div>
      <p onClick={tooggleLike}>
        Like Button &nbsp;
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
