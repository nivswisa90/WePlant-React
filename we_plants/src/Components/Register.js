import React from "react";

const styles = {
    wrraper:{
        border: '1px solid',
        marginLeft: "32%",
        marginTop: '18%',
        width: '45%',
        borderRadius: '5%',
        backgroundColor: 'grey'
    }
}
const Register = () => (
        <div style={styles.wrraper}>
            <h4>Register to We Plants</h4>
        <form>
          <div className="form-group">
            <label htmlFor="inputForEmail">Email address</label>
            <input
              id="inputForEmail"
              type="email"
              className="form-control"
              aria-describedby="Enter email address"
              placeholder="Enter email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputForName">Your Name</label>
            <input
              id="inputForName"
              type="text"
              className="form-control"
              aria-describedby="Enter your name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputForPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputForPassword"
              placeholder="Enter password"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
  </div>
);

export default Register;