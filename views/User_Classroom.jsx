var React = require("react");

class User_Classroom extends React.Component {
  render() {
    return(
      <div className="columns is-vcentered">
        <div className="column is-4 is-offset-2">
          <figure className="image">
           <div className="lostbutton green">
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
            <form method="POST" action={'/' + this.props.classname}>
            <div className="control">
              <textarea className="textarea" name="question" type="text" placeholder="type in your question"></textarea>
            </div>
            <br/>
            <p className="control">
               <input className="button is-info" value="post question" type="submit" />
            </p>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}

class Layout extends React.Component {
  render() {
   return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                    <a className="navbar-item" href='/'>
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
                <User_Classroom classname={this.props.classname}/>
              </div>
            </div>
            <div className="hero-foot">
            </div>
          </section>
          <script src="/user_script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Layout;