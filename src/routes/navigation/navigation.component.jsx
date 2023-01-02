import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
             <div>logo</div>
            </Link> 
            <div className="links-container">
                <Link className="nav-link"  to='/shop'>
                    shopping
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation