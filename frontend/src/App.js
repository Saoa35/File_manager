import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [parent, setParent] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/").then((res) =>
      res.json().then(
        (result) => {
          setParent("");
          setData(result);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }, []);

  const clickHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.attributes.href.value);

    fetch("http://localhost:8000/?path=" + e.target.attributes.href.value).then(
      (res) =>
        res.json().then(
          (result) => {
            let linkArr = result.path.split("/");
            console.log(linkArr);
            linkArr.pop();
            setParent(linkArr.join("/"));

            setData(result);
          },
          (error) => {
            console.log(error);
          }
        )
    );
  };

  const checkDir = (file, i) => {
    return file.dir ? (
      <li key={i} className="file">
        <span className="material-icons">&#xe2c7;</span>
        <a href={data.path + "/" + file.name} onClick={clickHandler}>
          {file.name.toUpperCase()}
        </a>
      </li>
    ) : (
      <li key={i} className="file">
        <span className="material-icons">&#xe873;</span>
        {file.name}
      </li>
    );
  };

  return (
    <div className="file_wrapper">
      <ul className="folder-list">
        <div>
          <a href={parent} onClick={clickHandler}>
            <span className="material-icons">&#xe5d8;</span>
            LEVEL UP
          </a>
        </div>

        <div className="current-level">
          current:
          {data && data.path ? (data.path === "" ? "/" : data.path) : ""}
        </div>

        {data &&
          data.files &&
          data.files.map((item, ind) => checkDir(item, ind))}
      </ul>
    </div>
  );
}
export default App;
