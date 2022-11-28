import React,{useState} from 'react'

function Navbar() {
    const [show, setShow] = useState(false);
  return (
   <>
   <section className='navbar-bg' > 
    <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">UserInfo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
    onClick={()=>{
        setShow(!show)
    }}
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show? "show":"" } `}id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <button class="btn   btn-style " type="submit">Sign up</button>
        <button class="btn   btn-style btn-style-border " type="submit">Log in</button>
      </form>
    </div>
  </div>
</nav>
</section>
   </>
  )
}

export default Navbar