import React from 'react';
import * as ContentComponents from '../../components/content';
import './style.scss';
import Content from './content.json';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="overwrite-index">
        <ContentComponents.HomeSlides imgSource={Content.homeSlides} />
        <ContentComponents.FeatureSection sectionContent={Content.featureSection} />
        <ContentComponents.RecentLecture lectureContent={Content.recentLecture} />
        <ContentComponents.ShowCases casesContent={Content.showCases} />
        <ContentComponents.KnowAboutUs aboutUsContent={Content.knowAboutUs} />
      </div>
    );
  }
}
