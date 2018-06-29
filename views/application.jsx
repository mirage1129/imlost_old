
const React = require('react');
const Home = require('./home');


class MainApplication extends React.Component {
  render() {
    let currentPage = this.props.page;

    switch(currentPage) {
      case 'home':
        var renderCurrentPage = <Home/>
        break;
      case 'new':
        var renderCurrentPage = <New/>
        break;
    }

    return(
      <html>
        <head>
          <title>I'm Lost!</title>
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous" />
        </head>
        <body>
          <div className="container">
            {renderCurrentPage}
          </div>
        </body>
      </html>
    )
  }
}

module.exports = MainApplication;