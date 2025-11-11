import React from 'react';
import img from './assets/suv-slider.png'
import { Tooltip } from 'react-tooltip';

const App = () => {
  return (

    <div>
      <div className="group top-card cursor relative overflow-hidden pointer h-[400px] rounded-xl bg-linear-to-tl from-orange-700 to-orange-300 shadow-md w-fit p-5 flex flex-col items-center justify-center gap-5" data-tooltip-id='top-tool-tip' data-tooltip-delay-hide={1000}>
        <div className="hidden group-hover:block transition duration-800 absolute top-0 right-0 bg-primary/70 h-1/4 w-2/4 rounded-bl-full"></div>
        <div className="text-content group-hover:bg-white/5 p-2 rounded-xl transition duration-300 z-50">
          <h3 className="text-xl text-secondary font-black w-fit h-fit p-3 rounded-xl bg-white/10">Toyota SUV</h3>
        </div>
        <div className="img h-1/2"><img src={img} className='h-full aspect-autot-4/3 mix-blend-multiply group-hover:mix-blend-normal transition duration-300' /></div>
        <div className="hidden group-hover:block transition duration-1000 absolute bottom-0 left-0 bg-secondary/70 h-1/4 w-2/4 rounded-tr-full "></div>

      </div>
      <Tooltip id='top-tool-tip' style={{padding:0, backgroundColor: '#F97316'}}>
        <div className="tool-tips-content bg-linear-to-tl from-orange-700 to-orange-300 px-3 py-1 rounded-md text-center">
           <p>Price: $1000</p>
           <p>Available</p>
        </div>
      </Tooltip>
    </div>
  );
};

export default App;