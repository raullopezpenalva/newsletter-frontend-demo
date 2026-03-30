import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Container from './Container.tsx';

const Layout: React.FC = () => {
  return (
    <div className="Layout">
      <Header />
      <main className="Layout-main">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;