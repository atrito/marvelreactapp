// Components
import Layout from '../components/layout';
// Styles
import '../styles/globals.css';
// App
const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);
export default App;
