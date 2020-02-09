import React from 'react';
import * as ContentComponents from '../../components/content';
import './style.scss';
import Content from './content.json';

const Home = () => (
  <div className="overwrite-index">
    <ContentComponents.HomeSlides imgSource={Content.homeSlides} />
    <ContentComponents.FeatureSection sectionContent={Content.featureSection} />
    <ContentComponents.RecentLecture lectureContent={Content.recentLecture} />
    <ContentComponents.AvatarCarousel avatarContent={Content.avatarCarousel} />
    <ContentComponents.ShowCases casesContent={Content.showCases} />
    <ContentComponents.KnowAboutUs aboutUsContent={Content.knowAboutUs} />
  </div>
);

export default Home;
