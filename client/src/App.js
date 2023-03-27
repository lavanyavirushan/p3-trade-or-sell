import {Routes, Route} from 'react-router-dom';
import homepage from './pages/homepage';
import browse from './pages/browse';
import postItem from './pages/postItem';
import viewItem from './pages/viewItem';
import bidScreen from './pages/bidScreen';

const App = () => {
    return (
        <>
            <Routes>
                <Route path ="/" element={<homepage />} />
                <Route path ="/browse" element={<browse />} />
                <Route path ="/postItem" element={<postItem />} />
                <Route path ="/viewItem" element={<viewItem />} />
                <Route path ="/bidScreen" element={<bidScreen />} />
            </Routes>
        </>
    )
}