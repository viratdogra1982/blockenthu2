import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

const Container: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Container;
