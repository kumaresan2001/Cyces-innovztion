import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import { API } from "./global";
const API = "https://www.melivecode.com/api/attractions";
const APIPUT = "https://www.melivecode.com/api/auth/attractions/update";
export function EditAttraction() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const getData = async () => {
    const res = await axios.get(`${API}/${id}`);
    setData(res.data.attraction);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return data ? <EditAttractionForm data={data} /> : <h1>loading</h1>;
}
function EditAttractionForm({ data }) {
  const formValidationSchema = yup.object({
    name: yup.string().required(),
    coverimage: yup.string().required().min(4).url(),
    latitude: yup.number().required().min(0).max(9999999999),
    detail: yup.string().required().min(20),
    longitude: yup.number().required().min(0).max(9999999999),
  });
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: data.name,
        coverimage: data.coverimage,
        latitude: data.latitude,
        detail: data.detail,
        longitude: data.longitude,
      },
      validationSchema: formValidationSchema,
      onSubmit: (newData) => {
        console.log("form values", newData);
        updataMovie(newData);
      },
    });
  const Navigate = useNavigate();
  const updataMovie = async (newData) => {
    await fetch(`${APIPUT}/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    Navigate("/attractionlist");
  };
  return (
    <form onSubmit={handleSubmit} className="add-attrac-form">
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        label="Name"
        variant="outlined"
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />
      <TextField
        name="image"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.coverimage}
        label="Image"
        variant="outlined"
        error={touched.coverimage && errors.coverimage}
        helperText={
          touched.coverimage && errors.coverimage ? errors.coverimage : null
        }
      />

      <TextField
        name="latitude"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.latitude}
        label="Latitude"
        variant="outlined"
        error={touched.latitude && errors.latitude}
        helperText={
          touched.latitude && errors.latitude ? errors.latitude : null
        }
      />

      <TextField
        name="detail"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.detail}
        label="Detail"
        variant="outlined"
        error={touched.detail && errors.detail}
        helperText={touched.detail && errors.detail ? errors.detail : null}
      />
      <TextField
        name="longitude"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.longitude}
        label="Longitude"
        variant="outlined"
        error={touched.longitude && errors.tlongitude}
        helperText={
          touched.longitude && errors.longitude ? errors.longitude : null
        }
      />

      <Button
        type="submit"
        // setMovieList([...movielist, newMovie]);
        color="success"
        variant="containd"
      >
        save
      </Button>
    </form>
  );
}
