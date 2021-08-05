import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import $ from 'jquery';

axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';

function Register() {
  const { register, handleSubmit, formState } = useForm();

  async function onSubmit(data) {
    try {
      const response = await axios.post('/api/books', data);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchData() {
    try {
      const result = await axios.get('/api/books');
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
  return (
    <div className="container-fluid">
      <div className="row p-0">
        <div className="col d-flex flex-column justify-content-center align-items-center p-5">
          <h1>CREATE AN ACCOUNT</h1>
          <p>Already a user?</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col">
                  <input
                    className="form-control m-0"
                    name="title"
                    placeholder="First Name"
                    autoComplete="off"
                    {...register("title", {
                      required: "Required",
                    })}
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control m-0"
                    name="subtitle"
                    placeholder="Last Name"
                    autoComplete="off"
                    {...register("subtitle", {
                      required: "Required",
                    })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col mt-3">
                  <input
                    className="form-control m-0"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col mt-3">
                  <input
                    className="form-control m-0"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col mt-3">
                  <input
                    className="form-control m-0"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button type="submit" className="btn btn-primary btn-block mt-3" disabled={formState.isSubmitting}>
                    Sign up
                  </button>
                </div>
              </div>
          </form>
        </div>
        <div className="col bg-dark">

        </div>
      </div>

    </div>
  );
};

export default Register;