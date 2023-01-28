import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Posts = () => {
  const params = useParams();
  const location = useLocation();

  const query = queryString.parse(location.search);

  console.log(params);
  console.log(query);

  return (
    <div>
      <h1>Posts</h1>
      Year: {params.year} , Month: {params.month}
    </div>
  );
};

export default Posts;
