// Modules
import axios from 'axios';
// Components
import List from '../components/home/List';
// Api
import { api } from '../services/api';
// Home
const Home = ({ characters }) => <List characters={characters} />;
// ServerSideProps
export const getServerSideProps = async () => {
  // Get Characters
  const characters = (await axios(api.characters(0))).data.data.results;
  // Return
  return { props: { characters } };
};
// Export
export default Home;
