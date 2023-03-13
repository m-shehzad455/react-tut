import "../App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const UseState = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm(form);
    
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <>
    <h1>UseEffect Hook</h1>
    <div className="App">
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(event) => setForm({...form, name: event.target.value})}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) => setForm({...form, email: event.target.value})}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* {Data} */}

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div className="data_val" key={index}>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default UseState;
