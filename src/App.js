import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav' 
import Footer from './components/Footer'
import MenuCards from './pages/MenuCards'
import Galerie from './pages/Galerie'
import Reservations from './pages/Reservation'
import Restaurant from './pages/Restaurant'
import Error from './pages/Error'
import LaCarte from './pages/LaCarte'
import Loader from './components/Loader'

function App() {
    return (
        <>
            <Router>
            <Loader />
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/menu" element={<MenuCards />} />
                    <Route path="/la-carte/:typeOfCard" element={<LaCarte />} />
                    <Route path="/galerie" element={<Galerie />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/restaurant" element={<Restaurant />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App