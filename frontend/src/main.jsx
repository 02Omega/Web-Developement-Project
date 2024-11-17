import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';
import Booking from './pages/Booking';

const Main = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings/:id" element={<ListingDetails />} />
            <Route path="/book/:id" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;