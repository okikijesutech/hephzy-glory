import React from "react";

const Botton = ({ name }) => {
  return (
    <div className='text-center mt-8'>
      <button className='bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors'>
        {name}
      </button>
    </div>
  );
};

export default Botton;
