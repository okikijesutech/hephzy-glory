import React from "react";

const Botton = ({ name }) => {
  return (
    <button className='bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors'>
      {name}
    </button>
  );
};

export default Botton;
