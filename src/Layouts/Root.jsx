import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
const Root = () => {
    return (
                <div className='h-screen flex flex-col'>
            <Navbar/>
            <div className='flex-1'>
              <Outlet/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Root;