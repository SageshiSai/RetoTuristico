multilineString = 
'<div id="navbar" class="sticky-top">'+
      '<nav class="navbar-container container">'+
        '<a href="index.html" class="home-link">'+
          '<div class="navbar-logo">'+
            '<img class="fotoNavBar " src="img/logo.png" alt="">'+
          '</div>'+
          'PIZIA'+
        '</a>'+
        '<button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">'+
          '<span class="icon-bar"></span>'+
          '<span class="icon-bar"></span>'+
          '<span class="icon-bar"></span>'+
        '</button>'+
        '<div id="navbar-menu" aria-labelledby="navbar-toggle">'+
          '<ul class="navbar-links">'+
            '<li class="navbar-item"><a class="navbar-link" href="/about">Compra</a></li>'+
            '<li class="navbar-item"><a class="navbar-link" href="/about">Contacto</a></li>'+
          '</ul>'+
        '</div>'+
      '</nav>'+
    '</div>';
document.write(multilineString);