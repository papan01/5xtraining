import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecentLecture = ({ lectureContent }) => (
  <div className="recent-lecture">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
          <h3 className="text-center mb-5 mt-5 pb-4">{lectureContent.title}</h3>
        </div>
        <div className="lecture-list d-flex flex-wrap pb-5">
          {
                lectureContent.navList.map((item) => {
                  const newCourse = item.status[0] ? <span className="badge badge-new-course">新開課</span> : null;
                  const applyCourse = item.status[1] ? <span className="badge badge-apply-course">開放報名中</span> : null;
                  return (
                    <div className="talks-partial col-12 col-sm-12 col-md-6 col-lg-4 pic mb-4 mb-sm-5" key={item.title}>
                      <Link to={item.url}>
                        <div className="lecture-wrap">
                          <div className="lecture-cover">
                            <img src={item.img} alt={item.title} />
                          </div>
                          <div className="lecture-content rl-padding py-2">
                            {newCourse}
                            {applyCourse}
                            <h4 className="mt-2 mb-2 mb-sm-4 font-weight-bold">{item.title}</h4>
                            <small>
                              講師：
                              {item.lecturer}
                            </small>
                            <div className="lecture-time mt-2 pt-sm-3 pt-2 pt-sm-3 d-flex">
                              <small>開課時間</small>
                              <div className="lecture-time-item">
                                <span className="badge badge-course-time mb-1">{item.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
            }
          <div className="col-12 text-center">
            <a className="btn btn-lg btn-red mt-4" href={lectureContent.lecturesUrl}>{lectureContent.moreLecture}</a>
          </div>
        </div>
      </div>
    </div>

  </div>
);

RecentLecture.propTypes = {
  lectureContent: PropTypes.shape({
    title: PropTypes.string,
    moreLecture: PropTypes.string,
    lecturesUrl: PropTypes.string,
    navList: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      img: PropTypes.string,
      status: PropTypes.arrayOf(PropTypes.bool),
      title: PropTypes.string,
      lecturer: PropTypes.string,
      date: PropTypes.string,
    })),
  }).isRequired,
};

export default RecentLecture;
