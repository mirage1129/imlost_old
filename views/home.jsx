var React = require("react");

class LoginFormOne extends React.Component {
  render() {
    return(
    <form action="/" method="POST">
      <div className="columns">
        <div className="column is-one-third is-offset-one-third">
          
          <div className="field has-addons">
            <div className="control">
              <input name="name" className="input has-text-centered" type="text" placeholder="type class name" />
            </div>
            <p className="control">
               <button className="button is-info is-inverted">create class</button>
            </p>
          </div>
        </div>
      </div>
    </form>
  )}
}

class LoginFormTwo extends React.Component {
  render() {
    return(
      <form action="/youare" method="GET">
        <div className="columns">
          <div className="column is-one-third is-offset-one-third">
    
            <div className="field has-addons">
              <div className="control">
                <input name="inclass" className="input has-text-centered" type="text" placeholder="type class name" />
              </div>
              <p className="control has-text-centered">
                 <button className="button is-info is-inverted">join a class</button>
              </p>
            </div>

          </div>
        </div>
      </form>
    )}
  }

class Home extends React.Component {
  render() {
   return (
      <html>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
          <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
        </head>
        
        <body className="has-background-primary">  
          <section className="hero is-info is-fullheight">
            <div className="hero-head">
              <nav className="navbar">
                <div className="container">
                  <div className="navbar-brand">
                    <a className="navbar-item">
                      <img src="compass.jpg" alt="Logo" />
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                </div>
              </nav>
            </div>
            <div className="hero-body">
              <div className="container">
                <LoginFormOne />
                <LoginFormTwo />
              </div>
            </div>
            <div className="hero-foot">
            </div>
          </section>
        </body>
      </html>
    );
  }
}

module.exports = Home;