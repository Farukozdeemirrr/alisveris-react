import { useState } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootStrap from "bootstrap";
import Basket from './Basket';

// Moneyi prop olarak alıyoruz
function Header({ total, money,product, basket }) {
    return (
        <>


<nav class="navbar navbar-expand-lg navbar-light bg-secondary" style={{
          textAlign: 'center', color: 'white',paddingLeft:'30px',
          position: 'sticky', top: '0',  fontSize: '24px', zIndex: '1'
        }}>
  <i class="navbar-brand" href="#">LOGO</i>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Anasayfa <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <i class="nav-link" href="#"> <div >


          {total > -1 && (
            <>
              Kalan bakiye: {money - total}TL || 
              <i style={{ float: 'right' }}>Ürün toplamı: {total}TL</i>

              {/*  */}
            </>
          ) 
          }

        </div></i>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">|| </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" 
        href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{float:'right'}} >
          Sepetim
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a style={{ textAlign: 'left' }}>
            <Basket basket={basket} product={product} />
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav>

            



        </>
    )
}


export default Header;
