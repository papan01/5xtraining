import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout';
import * as Pages from '../pages';
import '@fortawesome/fontawesome-free/css/all.min.css';
import withErrorBoundary from '../components/errorBoundary';

const PostsWithErrorBoundary = withErrorBoundary(Pages.Posts);

export default class App extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Pages.Home} />
          <Route path="/iamcoding" exact component={Pages.IAMCoding} />
          <Route path="/astro" exact component={Pages.Astro} />
          <Route path="/talks" exact component={Pages.Talks} />
          <Route path="/dev" exact component={Pages.Dev} />
          <Route path="/training" exact component={Pages.Training} />
          <Route path="/space" exact component={Pages.Space} />
          <Route path="/posts" exact component={PostsWithErrorBoundary} />
          <Route component={Pages.NotFound} />
        </Switch>
      </Layout>
    );
  }
}
