export default async (req, res) => {
  const API_KEY = process.env.YOUTUBE_KEY;
  const CHANNEL_ID = 'UC29ju8bIPH5as8OGnQzwJyA';
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&channelId=${CHANNEL_ID}&maxResults=25&key=${API_KEY}`
  );
  const data = await response.json();
  //   console.log('DATA: ', data);
  //   const { viewCount } = data.items[0].statistics;
  return res.status(200).json(data);
};
