import React, { HTMLAttributes } from "react";

const Contenedor = ({
  children,
  className = "",
  ...props
}) => {

  return (
    <div className={`px-5 ${className}`}>
      <div {...props} className='max-w-screen-xl w-full h-[inherit] mx-auto '>
        {children}
      </div>
    </div>
  );
};

export default Contenedor;
