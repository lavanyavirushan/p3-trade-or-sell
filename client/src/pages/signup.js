import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

const styles = {
  formStyle: {
    width: '90%',
    alignItems: 'center',
    margin: 'auto',
    background: 'white',
    color: 'black',
    //padding: '10px',

    borderRadius: '5px',
  },
  col75Style: {
    width: '75%',
    float: 'left',
  },
  col25Style: {
    width: '25%',
    float: 'left',
  },
  containerStyle: {
    borderRadius: '10px',
    border: '1px solid darkblue',
    width: '30%',
    alignItems: 'center',
    margin: 'auto',
    height: 'auto',
    padding: '10px',
    margintop: '10px', 
  },
  hStyle: {
    display: 'block',
    marginleft: 'auto',
    marginright: 'auto',

  },
  rowStyle: {
    padding: '10px',
    margin: '20px',
  },
  submitStyle: {
    float: 'right',
    background: 'blue',
    color: 'white',
  },
  inputStyle: {
    width: '100%',
  },
};

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        name: formState.name,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div style={styles.containerStyle}>
      <h2 style={styles.hStyle}>Logo</h2>

      <br></br>
      <div>
        <h4 style={styles.hStyle}>Signup</h4>
      </div>
      < br></br>
      <div >
        <form onSubmit={handleFormSubmit} style={styles.formStyle}>
          <div class="row" style={styles.rowStyle}>
            <div class="col-25" style={styles.col25Style}>
              <label htmlFor="Name">Name:</label></div>
            <div class="col-75" style={styles.col75Style}>

              <input style={styles.inputStyle}
                placeholder="Name"
                name="name"
                type="name"
                id="name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="row" style={styles.rowStyle}>
            <div class="col-25" style={styles.col25Style}>

              <label htmlFor="email">Email:</label></div>
            <div class="col-75" style={styles.col75Style}>

              <input style={styles.inputStyle}
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="row" style={styles.rowStyle}>
            <div class="col-25" style={styles.col25Style}>

              <label htmlFor="pwd">Password:</label></div>
            <div class="col-75" style={styles.col75Style}>

              <input style={styles.inputStyle}
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* {error ? (
            <div>
              <p className="error-text">Error! Try again later</p>
              </div>
          ): null} */}
          <div class="row" style={styles.rowStyle}>

            <button type="submit" style={styles.submitStyle}>Signup</button>
          </div>

        </form>
        <br></br>

        <h4 style={styles.hStyle}>To login, please click
          <button>
            <Link to="/login">LOGIN</Link></button></h4>
      </div>

    </div>
  );
}

export default Signup;

