// Components
import Header from './header';
import Footer from './footer';
// Layout
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
export default Layout;
