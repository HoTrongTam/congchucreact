import React from 'react';
import DetailView from './detailView';
import { connect } from 'react-redux';

class DetailContainer extends React.Component {
  render() {
    return <DetailView {...this.props} />
  }
}

export default connect()(DetailContainer);
