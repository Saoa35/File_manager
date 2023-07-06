import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/").then((res) =>
      res.json().then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }, []);

  const checkDir = (file) => {
    return file.dir ? <li>{file.name}</li> : <li>{file.name}</li>;
  };

  return (
    <div className="App">
      <ul>{data.files.map((item) => checkDir(item))}</ul>
    </div>
  );
}

export default App;
