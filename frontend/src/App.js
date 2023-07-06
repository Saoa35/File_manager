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

  const checkDir = (file, i) => {
    return file.dir ? (
      <li key={i} className="file">
        {file.name}
      </li>
    ) : (
      <li key={i} className="file">
        {file.name}
      </li>
    );
  };

  return (
    <div className="file_wrapper">
      <ul className="folder-list">
        {data && data.files.map((item, ind) => checkDir(item, ind))}
      </ul>
    </div>
  );
}

export default App;
