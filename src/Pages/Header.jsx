import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>

                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <div className="d-flex justify-content-center align-items-center bg-white ps-2 pr-5"> <i class="fa-solid fa-magnifying-glass"></i>
                      <input className="form-control me-2 border-0 inpuField" type="search" placeholder="Search" aria-label="Search" /> </div>

                    <select className="form-select" aria-label="Default select example">
                      <option value="1">AUD $</option>
                      <option value="2">CAD $</option>
                      <option value="3">EUR €</option>
                      <option value="4" selected>GBP £</option>
                      <option value="5">SEK kr</option>
                      <option value="5">USD $</option>
                    </select>
                    <div className=''>
                    <i class="fa-solid fa-user"></i> 
                    <p className='headerP'>LOG IN</p>
                    </div>
                    <div className=''>
                    <i class="fa-solid fa-bag-shopping"></i>
                    <p className='headerP'>Bag (3)</p>
                    </div>
                  </form>

                  <div>
                    <span>SALE</span>
                    <span>NEW IN</span>
                    <span>WOMEN</span>
                    <span>MEN</span>
                    <span>KIDS</span>
                    <span>BRANDS</span>
                    <span>SPORTS WEAR</span>
                    <span>DENIM</span>
                    <span>BLOG</span>
                  </div>
                    
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header