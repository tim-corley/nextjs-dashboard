import React from 'react';
import useSWR from 'swr';
import Fetcher from '../lib/fetcher';
import YoutubeCard from './YoutubeCard';

const YoutubeLists = () => {
  const { data, error } = useSWR('/api/youtube', Fetcher);
  if (error) {
    console.log(error);
  }
  if (!data) {
    return <div>- - -</div>;
  }
  const playlists = data[0].items;
  const thumbnail = data[1].items[0].snippet.thumbnails.high.url;
  return (
    <section className="text-xl font-semibold text-gray-900 dark:text-green-200 my-4">
      YouTube Playlists
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        {playlists.map((plist, index) => (
          <YoutubeCard key={index} data={plist.snippet} thumbnail={thumbnail} />
        ))}
      </div>
    </section>
  );
};

export default YoutubeLists;
