import Dash from '../components/dash';
import YoutubeLists from '../components/YoutubeLists';

const Dashboard = () => {
  return (
    <div>
      <Dash />
      <YoutubeLists />
      <Dash />
    </div>
  );
};

export default Dashboard;
