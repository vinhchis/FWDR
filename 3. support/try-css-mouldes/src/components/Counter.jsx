import { useState, useEffect } from "react";
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  // 1. dependency array isn't given
  // useEffect(() => { 
  //   console.log("like is updated", like); 
  // });

  // 2. depndency array contain "like"
  useEffect(() => { 
    console.log("like is updated", like); 
    console.log("dislike is updated", dislike); 
  },[like]);

  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>

      <button onClick={() => setDisLike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

export default Counter;
