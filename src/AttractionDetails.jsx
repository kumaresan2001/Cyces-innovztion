import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState, useEffect } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import { API } from "./global";

import axios from "axios";

export function AttractionDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const API = "https://www.melivecode.com/api/attractions";
  const APIDETETE = "https://www.melivecode.com/api/attractions/delete";

  const deleteAttraction = async () => {
    await axios.delete(APIDETETE);

    alert("Deleted Successfully");
  };

  const getData = async () => {
    const res = await axios.get(`${API}/${id}`);
    setData(res.data.attraction);
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  const Navigate = useNavigate();
  return (
    <div className="details">
      <h1>{data.name}</h1>
      <img className="image-detail" src={data.coverimage} />

      <div className="detail">
        <p className="detail-data">{data.detail}</p>
        <Button
          variant="containd"
          startIcon={<KeyboardReturnIcon />}
          onClick={() => Navigate(-1)}
        >
          Back
        </Button>
        <Button
          onClick={() => Navigate(`/attractionlist/edit/${id}`)}
          aria-label="delete"
          color="secondary"
        >
          Edit
          <EditIcon />
        </Button>
        <Button
          onClick={() => deleteAttraction(id)}
          aria-label="delete"
          color="error"
        >
          Delete
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}
