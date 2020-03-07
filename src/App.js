import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Security Question</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                  <label htmlFor="inputQuestion">What does Heem mean?</label>
                    <input type="text" id="inputQuestion" className="form-control" placeholder="Answer..." required autoFocus></input>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={submit}>Prove your not a casual</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function submit(e) {
    e.preventDefault();
      console.log("clicked");
  }
}

export default App;
