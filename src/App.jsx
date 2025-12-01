import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [pass,setPass]=useState("")
  function handlelick(){
    alert("form subitted successfully")

  }

  return (
    <>
      <div></div>
      <form onSubmit={handlelick}>
        <label for="">Email:</label>
        <input type="email"  /><br/>

        <label for="">Password:</label>
        <input type="password"  /><br/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
