import '../styles/index.scss'

import Header from '../components/Header';
import Footer from '../components/Footer';
import FlowersList from '../components/FlowersList';

function MainPage() {
    return (
      <>
        <Header/>
        <FlowersList/>
        <Footer/>
      </>
    );
  }
  
  export default MainPage;