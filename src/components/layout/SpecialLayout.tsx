import { Outlet } from 'react-router-dom';
import Container from './Container.tsx';

const Layout: React.FC = () => {
  return (
    <div className="Layout">
      <main className="Layout-main">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default Layout;