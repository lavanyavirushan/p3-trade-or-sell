import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

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
    background: 'white',
    width: '30%',
    alignItems: 'center',
    margin: 'auto',
    padding: '10px',
    margintop: '10px',
    border: '1px solid darkblue',
  },
  hStyle: {
    display: 'block',
    marginleft: 'auto',
    marginright: 'auto',

  },
  rowStyle: {
    padding: '10px',
    margin: 'auto',
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

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
        <h2 style= {styles.hStyle}>Logo</h2>

      <br></br>
      <div>
        <h4 style= {styles.hStyle}>Login</h4>
      </div>
     < br></br>
      <div >
        <form onSubmit={handleFormSubmit} style={styles.formStyle}>
          <div class="row" style={styles.rowStyle}>
            <div class="col-25" style={styles.col25Style} >
              <label htmlFor="email">Email:</label>
            </div>
            <div class="col-75" style={styles.col75Style} >
              <input style={styles.inputStyle}
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <br></br>
          <div class="row" style={styles.rowStyle}>
            <div class="col-25" style={styles.col25Style}>
              <label htmlFor="pwd">Password:</label> </div>
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
          {error ? (
            <div>
              <p className="error-text">Incorrect username or password</p>
            </div>
          ) : null}
          <br></br>
          <div class="row" style={styles.rowStyle}>
            <div class= "col">
            <button type="submit" style={styles.submitStyle}>Submit</button>
            </div>
          </div>
        </form>
      </div>
      <br></br>
      <div>
      <h4 style={styles.hStyle}>To register, please click 
        <button><Link to="/Signup">REGISTER</Link></button></h4>
    </div>
    </div>
  );
}

export default Login;

