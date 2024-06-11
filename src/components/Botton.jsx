import React from "react";

const Botton = ({ name }) => {
  return (
    <button className='bg-blue-600 text-white mt-5 py-3 px-6 rounded hover:bg-blue-700 transition-colors'>
      {name}
    </button>
  );
};

export default Botton;
