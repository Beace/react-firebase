import React, { Component } from 'react';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';

import config from './firebase-config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
    firebase.initializeApp(config);
  }

  componentWillMount() {
    const postRef = firebase.database().ref('posts');
    postRef.on('value', snapshot =>
      this.setState({
        posts: snapshot.val(),
        loading: false,
      }),
    );
  }

  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props.children, {
          firebaseRef: firebase.database().ref('posts'),
          posts: this.state.posts,
          loading: this.state.loading,
        })}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
