import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// Import Component Files
import Header from './components/Header';
import GalleryList from './components/GalleryList';
import Error from './components/Error';

// Import Flickr API KEY
import { API_KEY } from './config';

class App extends Component {
  state = {
    photos: [],
    isLoaded: false
  };

  componentDidMount() {
    this.fetchPhotos('buttigieg');
  }

  fetchPhotos = query => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({ photos: data.photos.photo, isLoaded: true });
      })
      .catch(err => console.log(`Error: ${err.message}`));
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header
            title="Flickr API Photo Search"
            fetchQuery={this.fetchPhotos}
          />

          {!this.state.isLoaded ? (
            <h2>Loading...</h2>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/search/buttigieg" />}
              />

              <Route
                path="/search/:query"
                render={props => (
                  <GalleryList {...props} photos={this.state.photos} />
                )}
              />
              <Route component={Error} />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
