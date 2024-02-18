import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className="container ">
      <form>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email or phone number</label>
        </div>
        <div className="mb-2 "></div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="mb-3 "></div>
        <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
        <div className="mb-1 "></div>
        <a className="icon-link icon-link-hover" href="#">
          Forget password?
          <svg className="bi" aria-hidden="true"><use xlinkHref="#arrow-right"></use></svg>
        </a>
        <div className="mb-1 "></div>
        <button type="button" className="btn btn-success">Create new account</button>
      </form>
    </div>
  );
}
export default App;