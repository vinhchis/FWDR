import React, { useState } from "react";

function GetTask() {
  const [task, setTask] = useState("[ a rest ]");
  return (
    <>
      {/* <h1>
        {task}__ {setTask}
      </h1> */}

      <h1>Take {task} Today</h1>
      <div type="button" onClick={() => setTask("[ a Meeting ]")}>
        <button>Monday-Wesnesday-Friday</button>
      </div>
      <div type="button" onClick={() => setTask("[ a Walk ]")}>
        <button>Tuesday-Thursday</button>
      </div>
    </>
  );
}

export default GetTask;
