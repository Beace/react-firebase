import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.div`
  width: 100px;
`;

class Posts extends Component {
  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="posts">
        <List>{this.props.posts.map((post, index) => <div key={index}>{post.title}</div>)}</List>
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
};

export default Posts;
