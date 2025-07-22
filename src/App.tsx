import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

import backgroundImg from './assets/wp9322430-chill-4k-wallpapers.jpg'


function App() {

  const styles: { [key: string]: React.CSSProperties } = {
    main: {
      padding: "0px 0px 0px 0px",
      backgroundColor: 'transparent',
      width: "100%",
      position: "relative",
      top: "0",
      display: "flex",
      // flexDirection: "row",
      justifyContent: "center",
      flexGrow: 1,
      overflowY: "auto",
      margin: "zero"
    },
    backgroundImgDiv: {
      position: "fixed",
      top: "0",
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
      zIndex: "-100",
    }
  }


  return (
    <>
      <div style={styles.backgroundImgDiv} />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  );
}
export default App