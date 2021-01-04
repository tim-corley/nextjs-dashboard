import React from 'react';
import useSWR from 'swr';
import Fetcher from '../lib/fetcher';

const YoutubeSubs = () => {
  const { data, error } = useSWR('/api/youtube', Fetcher);
  if (error) {
    console.log(error);
  }
  if (!data) {
    return <div>- - -</div>;
  }
  console.log(data);
  return <div>got some data....</div>;
};

export default YoutubeSubs;
