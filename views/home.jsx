var React = require("react");

// This login form will be rendered only if the user is not logged in. Because it's a fairly large component (relatively speaking), I've chosen to extract it as its own component rather than embed it in the home component.
class LoginForm extends React.Component {
  render() {
    return(

    <form action="/users/login" method="POST">
      <div class="columns">
        <div class="column is-one-third is-offset-one-third">
          
          <div class="field has-addons">
            <div class="control">
              <input name="create-class" class="input has-text-centered" type="text" placeholder="type class name" />
            </div>
            <p class="control">
               <a class="button is-info is-inverted">create class</a>
            </p>
          </div>
        </div>
      </div>
      
      <div class="columns">
        <div class="column is-one-third is-offset-one-third">
  
          <div class="field has-addons">
            <div class="control">
              <input name="create-class" class="input has-text-centered" type="text" placeholder="type class name" />
            </div>

            <p class="control has-text-centered">
               <a class="button is-info is-inverted">join a class</a>
            </p>
          </div>
 

        </div>
      </div>
    </form>
    )
  }
}

class Home extends React.Component {
  render() {
    // If the user is not logged in, display the login form.
    // If the user is logged in, display his name, his tasks, and a logout button.

    // If the user is logged in, our controller/index.js will pass in a name as part of this.props (it's that object that's in the 2nd parameter of the response.render function). We use that to detect whether the user is logged in or not here. If the user is logged in, tasks would have been passed in here as well. That is in the form [{task: 'some task'}, {task: 'another task'}]. So we map each of the task objects into list elements.
    let tasks = [];
    if (this.props.name) {
      tasks = this.props.tasks.map(entry => <li>{entry.task}</li>);
    };

    // You'll see that I use ternary operators quite often in components below. That's because mixing up JS and HTML in such close proximity makes for really bad readability. This is one instance where you really don't want your JS code to be any longer than is absolutely needed, so no if-else statements if possible!
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
          <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
        </head>
        <body class="has-background-primary">
          
          <section class="hero is-info is-large">
            <div class="hero-head">
              <nav class="navbar">
                <div class="container">
                  <div class="navbar-brand">
                    <a class="navbar-item">
                      <img src="https://images.clipartuse.com/194696ab6f65dbcea8996650a376a891_compass-clipart-transparent-background-pencil-and-in-color-_958-958.png" alt="Logo" />
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                </div>
              </nav>
            </div>

            <div class="hero-body">
              <div class="container has-text-centered">
                {this.props.name ? ', ' + this.props.name : ''}
                {!this.props.name ? <LoginForm /> : <a href='/users/logout'>Logout</a>}
                {!this.props.name ? '' : <ul>{tasks}</ul>}
              </div>
            </div>
          </section>
        </body>
      </html>
    );
  }
}

module.exports = Home;