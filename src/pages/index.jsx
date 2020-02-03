import React from 'react';
import { render } from 'react-dom';

export default class Home extends React.PureComponent {
  render() {
    return <div>Hello World</div>;
  }
}

render(<Home />, document.getElementById('app'));
