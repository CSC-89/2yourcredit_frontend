import React from 'react';
import loadIcon from '../assets/imgs/icons/icons8-loading-100.png'
import './LoadingComponent.css'

const LoadingPage = () => {
  return (
    <> 
          <div className="container mx-auto text-center flex justify-center w-full mb-5">
        <div className="max-w-sm mt-5 pt-5 pb-5 w-full">
         <h1 className="mb-5 text-xl"><b>LOADING...</b></h1>
         <img src={loadIcon} className="load-logo mx-auto mb-5" alt="pokeball-logo" />
        </div>
      </div>
    </>
  );
}

export default LoadingPage;