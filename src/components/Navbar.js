import React from 'react'
// import propTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className="navbar navBar navbar-expand-lg">
            <div className="container-fluid navBar1">
                <a className="navbar-brand pt-0 pb-0" href="#">
                    <img className="homeImg" src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="Logo" />
                </a>
                <div className='d-flex flex-row justify-content-between'>
                    <div className="nav-item  navActionsIcons d-lg-none fontFam">
                        <i className="fa-solid fa-indian-rupee-sign"></i>0.00
                    </div>
                    <div className="nav-item navActionsIcons d-lg-none fontFam">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="position-absolute top-750 badge rounded-pill cartIcon  ">
                            0
                            <span className="visually-hidden">Cart count</span>
                        </span>
                    </div>
                    <button className="navbar-toggler togbtn mx-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars iconCss"  ></i>
                    </button>
                </div>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item navItemsCss fontFam">
                            <a className="nav-link" aria-current="page" href="#">Everything</a>
                        </li>
                        <li className="nav-item navItemsCss fontFam">
                            <a className="nav-link" href="#">Groceries</a>
                        </li>
                        <li className="nav-item navItemsCss fontFam">
                            <a className="nav-link" href="#">Juice</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fontFam">
                        <li className="nav-item navItemsCss">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item navItemsCss fontFam">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item  navActionsIcons d-sm-none d-none d-md-none d-lg-inline fontFam">
                            <i className="fa-solid fa-indian-rupee-sign"></i>0.00
                        </li>
                        <li className="nav-item navActionsIcons d-sm-none d-none d-md-none d-lg-inline fontFam">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="position-absolute top-750 badge rounded-pill cartIcon  ">
                                0
                                <span className="visually-hidden">Cart count</span>
                            </span>
                        </li>
                        <li className="nav-item" style={{ paddingLeft: "33px", marginTop: "6px" }}>
                            <i className="fa-solid fa-user d-sm-none d-none d-md-none d-lg-inline "></i>
                        </li>
                        <li className="nav-item navItemsCss d-lg-none fontFam">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
// Navbar.propTypes = {
//     title: propTypes.string.isRequired,
//     num: propTypes.number
// }
// Navbar.defaultProps ={
//     title : 'Set your title',
//     num : 1
// }

