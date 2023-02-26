import { Link } from "react-router-dom";

import './styles.scss'

const Error=()=>(
  <main className="error">
    <div className="error__holder">
      <h1 className="error__title">Error!</h1>
      <p className="error__subtitle">404</p>
      <nav className="nav">
        <Link to='/' className="error__btn">Back to Home</Link>
      </nav>
    </div>
  </main>
)

export default Error;
