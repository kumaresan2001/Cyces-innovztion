import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function AddAttraction() {
  const API = " https://www.melivecode.com/api/auth/attractions/create";
  const formValidationSchema = yup.object({
    id: yup.number().required().min(0).max(100),
    name: yup.string().required(),
    coverimage: yup.string().required().min(4).url(),
    latitude: yup.number().required().min(0).max(9999999999),
    detail: yup.string().required().min(20),
    longitude: yup.number().required().min(0).max(9999999999),
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        id: "",
        name: "",
        coverimage: "",
        latitude: "",
        detail: "",
        longitude: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (newData) => {
        console.log("form values", newData);
        addData(newData);
      },
    });
  const Navigate = useNavigate();
  const addData = async (newData) => {
    await fetch(API, {
      method: "POST",
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
        name="id"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.id}
        label="Id"
        variant="outlined"
        error={touched.id && errors.id}
        helperText={touched.id && errors.id ? errors.id : null}
      />

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
        name="coverimage"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.coverimage}
        label="Coverimage"
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
        label="detail"
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
        error={touched.longitude && errors.longitude}
        helperText={
          touched.longitude && errors.longitude ? errors.longitude : null
        }
      />

      <Button type="submit" variant="containd">
        add attraction
      </Button>
    </form>
  );
}
