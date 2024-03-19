import { useState } from "react";
function ColorBox() {
  const [color, setColor] = useState("red");
  const styles = {
    background: color,
  };

  return (
    <div>
      <h1>Color Box</h1>
      <input
        type="text"
        style={styles}
        onChange={() => setColor(this.value)}
        placeholder="Type a color"
      />
    </div>
  );
}
export default ColorBox;
