export default async (req, res) => {
  const API_KEY = process.env.YOUTUBE_KEY;
  const CHANNEL_ID = 'UC29ju8bIPH5as8OGnQzwJyA'; //Traversy Media
  try {
    let [playlists, account] = await Promise.all([
      fetch(
        `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=9&key=${API_KEY}`
      ),
      fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${CHANNEL_ID}&key=${API_KEY}`
      ),
    ]);
    const playlistData = await playlists.json();
    const accountData = await account.json();
    return res.status(200).json([playlistData, accountData]);
  } catch (error) {
    console.log(error);
  }
};
