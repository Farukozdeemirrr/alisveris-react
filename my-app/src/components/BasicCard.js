<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">LOGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Anasayfa <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> <div style={{
          textAlign: 'center', background: 'orange', height: '70px', color: 'white',
          position: 'sticky', top: '0', letterSpacing: '1px', fontSize: '24px', zIndex: ''
        }}>


          {total > -1 && (
            <>
              Kalan bakiye: {money - total}TL
              <i style={{ float: 'right' }}>Ürün toplamı: {total}TL</i>

              {/*  */}
            </>
          ) || (
              <>
                Kalan bakiye: {money}TL
              </>
            )
          }

        </div></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sepetim
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <div style={{ textAlign: 'left' }}>
            <Basket basket={basket} product={product} />
          </div>
        </div>
      </li>
    </ul>
  </div>
</nav>