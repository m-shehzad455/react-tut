import React, { useState, useEffect } from "react";
import "../App.css"

const UseEffect = () => {
  const [state, setState] = useState(5);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com./employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);

      console.log(res);
    }

    getData();

    document.title= `(${state} Employees Online)`

  }, [state]);

  return (
    <>
    <h1>UseEffect Hook</h1>
    <div>
      <button onClick={() => setState(state + 5)}>Click Me {state}</button>
      {data.map((element,index) => {
        return(
          <div key={index} className="dataa">
            <h4>{element.firstName}</h4>
            <h4>{element.LastName}</h4>
            <h4>{element.email}</h4>
          </div>
        )
      })}
    </div>
    </>
  );
};

export default UseEffect;
