var React = require("react");

class Admin_Classroom extends React.Component {
  render() {
    return(

      <div className="columns is-vcentered">
        <div className="column is-4 is-offset-2">
          <figure className="image">
           <div className="lostNumber">
            <h1>Testing</h1>
           </div>
          </figure>
        </div>
        <div className="column">
          <div className="box">
            <h1 className="is-size-3">Questions</h1>
            <br />

            <div className="box">
              <article className="media">
                <figure className="media-left">
                  <p>
                    <div className="icon is-small has-text-info"><i className="fas fa-arrow-up"></i></div>
                  </p>
                  <p>
                    <div className="icon is-small has-text-info"><i className="fas fa-arrow-down"></i></div>
                  </p>
                </figure>
                  <div className="media-content">
                    <div className="content">
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <p>
                            This is a question that someone is asking.
                          <br />
                          <small><a className="has-text-info">3 answers</a> · <a className="has-text-info">1 followup</a></small>
                          </p>
                        </div>
                      </nav>    
                    </div>
                  </div>
                <div className="media-right">
                  <button className="delete"></button>
                </div>
              </article>
            </div>




            <div className="box">
              <article className="media">
                <figure className="media-left">
                  <p>
                    <div className="icon is-small has-text-info"><i className="fas fa-arrow-up"></i></div>
                  </p>
                  <p>
                    <div className="icon is-small has-text-info"><i className="fas fa-arrow-down"></i></div>
                  </p>
                </figure>
                  <div className="media-content">
                    <div className="content">
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <p>
                            This is a question that someone is asking.
                          <br />
                          <small><a className="has-text-info">1 answer</a> · <a className="has-text-info">3 followups</a></small>
                          </p>
                        </div>
                      </nav>    
                    </div>
                  </div>
                <div className="media-right">
                  <button className="delete"></button>
                </div>
              </article>
            </div>

            <div className="box">
              <article className="media">
                <figure className="media-left">
                  <p>
                    <div className="icon is-small has-text-info"><i className="fas fa-arrow-up"></i></div>
                  </p>
                  <p>
                    <div className="icon is-small has-text-info"><i className="fas fa-arrow-down"></i></div>
                  </p>
                </figure>
                  <div className="media-content">
                    <div className="content">
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <p>
                            This is a question that someone is asking.
                          <br />
                          <small><a className="has-text-info">0 answers</a> · <a className="has-text-info">0 followups</a></small>
                          </p>
                        </div>
                      </nav>    
                    </div>
                  </div>
                <div className="media-right">
                  <button className="delete"></button>
                </div>
              </article>
            </div>


            <div className="control">
              <textarea className="textarea" type="text" placeholder="type in your question"></textarea>
            </div>


          </div>
        </div>
      </div>
      
    )
  }
}

module.exports = Admin_Classroom;

class Layout extends React.Component {
  render() {
   return (
      <html>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
          <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
          <link rel="stylesheet" type="text/css" href="/main.css" />
        </head>
        <body className="has-background-info">  
          <section className="hero is-info is-fullheight">
            <div className="hero-head">
              <header className="navbar">
                <div className="container">
                  <div className="navbar-brand">
                    <a className="navbar-item">
                      <img src="compass.jpg" alt="Logo" />
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenuHeroC" className="navbar-menu">
                    <div className="navbar-end">
                      <a className="navbar-item">
                        Admin
                      </a>
                    </div>
                  </div>
                </div>
              </header>
            </div>

            <div className="hero-body">
              <div className="container">
                <Admin_Classroom />
              </div>
            </div>
            <div className="hero-foot">
            </div>
          </section>
          <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Layout;