import { Formik } from "formik";
import app_config from "../config";

const Register = () => {
  const url = app_config.api_url;

  const userform = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  const formSubmit = (values) => {
    console.log(values);

    const req_opt = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/add", req_opt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Register Component</h1>

      <div className="card col-md-6">
        <div className="card-body">
          <Formik initialValues={userform} onSubmit={formSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="name"
                  className="form-control"
                  onChange={handleChange}
                  value={values.name}
                  id="name"
                />

                <input
                  placeholder="username"
                  className="form-control"
                  onChange={handleChange}
                  value={values.username}
                  id="username"
                />

                <input
                  placeholder="email"
                  className="form-control"
                  onChange={handleChange}
                  value={values.email}
                  id="email"
                />

                <input
                  placeholder="password"
                  type="password"
                  className="form-control"
                  onChange={handleChange}
                  value={values.password}
                  id="password"
                />

                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
