import React from 'react';
import useSWR from 'swr';
import Fetcher from '../lib/fetcher';
import YoutubeCard from './YoutubeCard';

const YoutubeSubs = () => {
  const { data, error } = useSWR('/api/youtube', Fetcher);
  if (error) {
    console.log(error);
  }
  if (!data) {
    return <div>- - -</div>;
  }
  console.log('YT DATA: ', data);
  console.log('PL DATA: ', data[0]);
  const playlists = data[0].items;
  const thumbnail = data[1].items[0].snippet.thumbnails.high.url;
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      {playlists.map((plist) => (
        <YoutubeCard data={plist.snippet} thumbnail={thumbnail} />
      ))}
    </div>
  );
};

export default YoutubeSubs;
