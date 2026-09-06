const Header = () => {
  return (
    <header className="bg-slate-500 text-white py-10 flex flex-col items-center text-center font-mono">
      <h1 className="text-3xl rotate-4 z-1 font-bold uppercase bg-slate-900 p-2">
        Team Task Board
      </h1>
      <h2 className="rotate-3 text-xl text-white font-medium uppercase bg-slate-700 -mt-2 p-3">
        Team Java
      </h2>
      <h3 className="-rotate-12 -mt-2 mb-5 z-1 border-t-2 border-slate-700 text-sm uppercase p-4 bg-slate-900">
        Anslagstavla för uppgifter för Team Java
      </h3>
    </header>
  );
};

export default Header;
