import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Homepage from './pages/homepage';
import Browse from './pages/browse';
import PostItem from './pages/postItem';
import ViewItem from './pages/viewItem';
import BidScreen from './pages/bidScreen';
import BuyScreen from './pages/buyScreen';

function App() {
  return (
    <Router> 
            <div className="App">
                <Navbar/>
                <div className="content">                  
                    <Routes>
                        <Route exact path ="/" element={<Homepage/>}></Route>
                        <Route path ="/browse" element={<Browse/>}></Route>
                        <Route path ="/postItem" element={<PostItem/>}></Route>
                        <Route path ="/viewItem" element={<ViewItem/>}></Route>
                        <Route path ="/bidScreen" element={<BidScreen/>}></Route>
                        <Route path ="/buyScreen" element={<BuyScreen/>}></Route>
                    </Routes>
                </div>
            </div>              
    </Router>
  );
}

export default App;
