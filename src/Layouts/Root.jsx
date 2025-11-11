import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
const Root = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <div className='flex-1'>
                <Outlet />
            </div>

            <Footer />
            <ToastContainer 
            position='top-center'
            hideProgressBar ={true}
            autoClose ={3000}
            />
        </div>
    );
};

export default Root;