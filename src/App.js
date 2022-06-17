import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="m-5">React Checkpoint</h1>
      <div className="container-sm">
        <div className="row mb-5">
          <div className="col-6 flex-start">
            <h1 className="d-flex container">This is a layout.</h1>
            <p className="d-flex container">
              I really don't know though. This is my favourite look for a
              website.
            </p>
          </div>
          <div className="col-6">
            <img
              src="https://unsplash.com/photos/GQCIk0cWg4c/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU1NDg2NjE1&force=true&w=640"
              class="img-fluid rounded"
              alt="..."
            />
          </div>
        </div>
        <h1 className="mb-5">And This Is A Form.</h1>
        <form action="" className="container">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="">
              Password
            </label>
            <div class="">
              <input type="password" class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="mb-3 row">
            <button type="submit" class="btn btn-primary mb-3">
              Confirm identity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
