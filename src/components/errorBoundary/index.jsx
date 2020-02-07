/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React from 'react';

const handleError = (ctx) => (
  <div className="error">
    <h2>糟糕，出了點問題!</h2>
    <details>
      {ctx.state.error && ctx.state.error.toString()}
      <br />
      {ctx.state.errorInfo.componentStack}
    </details>
  </div>
);

const withErrorBoundary = (WrappedComponent) => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error, errorInfo });
    }

    render() {
      const { errorInfo } = this.state;
      if (errorInfo) {
        return handleError(this);
      }
      return <WrappedComponent {...this.props} />;
    }
  }
);

export default withErrorBoundary;
