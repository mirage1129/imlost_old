var React = require("react");

class Content extends React.Component {
  render() {
    return(

      <div class="columns is-vcentered">
        <div class="column is-3">
          <figure class="image is-128x128">
            <img src="redbutton.png" />
          </figure>
        </div>
        <div class="column is-3">
          <figure class="image is-128x128">
            <img src="greenbutton.png" />
          </figure>
        </div>
        <div class="column">
          <div class="box">
            <div class="content">
              <h1>Questions</h1>
              <ul>
                <li>This</li>
                <li>is</li>
                <li>where</li>
                <li>people</li>
                <li>put</li>
                <li>their</li>
                <li>questions</li>
                <li>post</li>
                <li>request</li>
                <li>puts</li>
                <li>the</li>
                <li>question</li>
                <li>here</li>
              </ul>
            </div>
            <div class="control">
              <textarea class="textarea" type="text" placeholder="type in your question"></textarea>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

class Home extends React.Component {
  render() {
   return (
      <html>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
          <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
        </head>
        
        <body className="has-background-info">  
          <section class="hero is-info is-fullheight">
            <div class="hero-head">
              <header class="navbar">
                <div class="container">
                  <div class="navbar-brand">
                    <a class="navbar-item">
                      <img src="compass.jpg" alt="Logo" />
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenuHeroC" class="navbar-menu">
                    <div class="navbar-end">
                      <a class="navbar-item">
                        Admin
                      </a>
                    </div>
                  </div>
                </div>
              </header>
            </div>

            <div className="hero-body">
              <div className="container">
                <Content />
              </div>
            </div>
          </section>
        </body>
      </html>
    );
  }
}

module.exports = Home;