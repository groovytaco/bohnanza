import { Link } from 'react-router-dom';

const HomePage = () => (
  <>
    <h1>Home Page</h1>
    <h3><Link to="lobby">Lobby</Link></h3>
    <h3><Link to="/party-zone">Party Zone</Link></h3>
    <h3><Link to="activeGame">activeGame</Link></h3>
  </>
);

export default HomePage;
