import React, { useState, useEffect } from 'react';
import Pagination from '../../components/pagination';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const postsPerPage = 4;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
        setNumPages(Math.ceil(result.length / postsPerPage));
        setIsLoading(false);
      })
      .catch((error) => error);
  }, [isLoading]);

  return isLoading ? (
    <div className="container">
      <h3>Loading...</h3>
    </div>
  ) : (
    <div className="posts-category pb-3">
      {
            posts.slice(currentPage - 1, currentPage - 1 + postsPerPage).map((post) => (
              <div className="posts-lists-partial mt-5" key={post.id}>
                <div className="container">
                  <div className="row">
                    <div className="col-12 center-block">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
                        <div className="posts-wrap d-flex flex-column light-grey-bg">
                          <h3>{post.title}</h3>
                          <p>{post.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
      <Pagination currentPage={currentPage} numPages={numPages} navigate={setCurrentPage} />
    </div>
  );
};

export default Posts;
