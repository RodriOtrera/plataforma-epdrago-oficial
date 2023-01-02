import React from "react";

const Navbar: React.FC = ({}) => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Epdrago</h1>
      <div className="hidden items-center space-x-10 lg:flex ">
        <h1>Cursos</h1>
        <h1>Noticias</h1>
        <h1>Contacto</h1>
        <div className="flex space-x-4">
          <button
            type="button"
            className="min-w-[110px] rounded-lg bg-white px-4 py-2 font-bold text-black"
          >
            Registrarse
          </button>
          <button
            type="button"
            className="min-w-[110px] rounded-lg border border-white px-4 py-2 font-bold"
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
