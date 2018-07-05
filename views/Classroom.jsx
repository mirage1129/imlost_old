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
            <h1 class="is-size-3">Questions</h1>
            <br />

            <div class="box">
              <article class="media">
                <figure class="media-left">
                  <p>
                    <div class="icon is-small has-text-info"><i class="fas fa-arrow-up"></i></div>
                  </p>
                  <p>
                    <div class="icon is-small has-text-info"><i class="fas fa-arrow-down"></i></div>
                  </p>
                </figure>
                  <div class="media-content">
                    <div class="content">
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <p>
                            This is a question that someone is asking.
                          <br />
                          <small><a class="has-text-info">3 answers</a> · <a class="has-text-info">1 followup</a></small>
                          </p>
                        </div>
                      </nav>    
                    </div>
                  </div>
                <div class="media-right">
                  <button class="delete"></button>
                </div>
              </article>
            </div>




            <div class="box">
              <article class="media">
                <figure class="media-left">
                  <p>
                    <div class="icon is-small has-text-info"><i class="fas fa-arrow-up"></i></div>
                  </p>
                  <p>
                    <div class="icon is-small has-text-info"><i class="fas fa-arrow-down"></i></div>
                  </p>
                </figure>
                  <div class="media-content">
                    <div class="content">
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <p>
                            This is a question that someone is asking.
                          <br />
                          <small><a class="has-text-info">1 answer</a> · <a class="has-text-info">3 followups</a></small>
                          </p>
                        </div>
                      </nav>    
                    </div>
                  </div>
                <div class="media-right">
                  <button class="delete"></button>
                </div>
              </article>
            </div>

            <div class="box">
              <article class="media">
                <figure class="media-left">
                  <p>
                    <div class="icon is-small has-text-info"><i class="fas fa-arrow-up"></i></div>
                  </p>
                  <p>
                    <div class="icon is-small has-text-info"><i class="fas fa-arrow-down"></i></div>
                  </p>
                </figure>
                  <div class="media-content">
                    <div class="content">
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <p>
                            This is a question that someone is asking.
                          <br />
                          <small><a class="has-text-info">0 answers</a> · <a class="has-text-info">0 followups</a></small>
                          </p>
                        </div>
                      </nav>    
                    </div>
                  </div>
                <div class="media-right">
                  <button class="delete"></button>
                </div>
              </article>
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