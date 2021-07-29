import React, { useState } from "react";

function Todo() {
  const [data, setData] = useState("");
  const [arr, setArr] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [fid, setFid] = useState({
    id: new Date().getTime().toString(),
    name: "",
  });

  const Input = (e) => {
    setData(e.target.value);
  };

  const Add = () => {
    if (data) {
      const allData = {
        id: new Date().getTime().toString(),
        name: data,
      };
      setArr([...arr, allData]);
      setData("");
    }
  };

  const Delete = (id) => {
    const up = arr.filter((val) => {
      return val.id !== id;
    });
    setArr(up);
  };

  const DeleteAll = () => {
    setArr([]);
  };

  const edit = (nam) => {
    setToggle(false);
    setData(nam.name);
    setFid(nam);
  };

  const edi = () => {
    if (data) {
      setToggle(true);
      for (let index = 0; index < arr.length; index++) {
        if (arr[index].id === fid.id) {
          arr[index].name = data;
        }
      }
      setData("");
    }
  };

  return (
    <>
      <div className="main">
        <figure>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1024px-GNOME_Todo_icon_2019.svg.png"
            alt=""
          />
          <figcaption>Add Your List Items Here ✌</figcaption>
        </figure>
        <div className="addItem">
          <input
            type="text"
            placeholder="✍ Add Items..."
            value={data}
            onChange={Input}
          />
          {toggle ? (
            <i className="fas fa-plus" onClick={Add}></i>
          ) : (
            <i className="fas fa-edit" onClick={edi}></i>
          )}
        </div>
        <div className="showItem">
          {arr.map((val) => {
            return (
              <div className="eachItem" key={val.id}>
                <h3>{val.name}</h3>
                <div>
                  <i className="fas fa-edit" onClick={() => edit(val)}></i>
                  <i
                    className="far fa-trash-alt"
                    title="Delete Item"
                    onClick={() => Delete(val.id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="showItem">
          <button
            className="btn effect04"
            data-sm-link-text="Remove All"
            onClick={DeleteAll}
          >
            <span>Check List</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
