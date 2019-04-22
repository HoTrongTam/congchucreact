import React from 'react';
import {
 ActivityIndicator
} from 'react-native';

const Loading = (props) => (
  <ActivityIndicator
    animating={props.loading}
    size="small"
  />
)

export default Loading;
