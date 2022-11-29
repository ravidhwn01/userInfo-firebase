import React,{useState} from 'react'

function Navbar() {
    const [show, setShow] = useState(false);
  return (
   <>
   <section className='navbar-bg' > 
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">UserInfo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
    onClick={()=>{
        setShow(!show)
    }}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show? "show":"" } `}id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <button className="btn   btn-style " type="submit">Sign up</button>
        <button className="btn   btn-style btn-style-border " type="submit">Log in</button>
      </form>
    </div>
  </div>
</nav>
</section>
   </>
  )
}

export default Navbar