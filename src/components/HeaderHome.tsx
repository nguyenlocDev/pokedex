import React from "react";

const HeaderHome: React.FC = () => {
  return (
    <div className="p-3 flex gap-5 items-center w-full">
      <img
        src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
        alt="pokedex"
        className="w-[200px]"
      />
      <input
        type="text"
        placeholder="Search Pokemon Name?..."
        className="px-3 py-3 w-[500px] rounded-lg bg-transparent border border-blue-300 text-white font-semibold text-xl outline-none"
      />
      <div className="flex gap-x-5 text-white text-xl font-semibold ml-auto">
        <a
          href="/poke"
          className="relative hover:text-blue-400 before:absolute before:content-['']  before:w-full before:h-1 before:bg-blue-400 before:rounded-md before:-bottom-1 before:-translate-x-full  before:transition-all before:ease-in before:opacity-0 hover:before:translate-x-0 hover:before:opacity-100 "
        >
          Pokemon
        </a>
        <a
          href="/items"
          className="relative hover:text-blue-400 before:content-[''] before:absolute before:w-full before:h-1 before:bg-blue-400 before:rounded-md before:-bottom-1 before:-translate-x-full  before:transition-all before:ease-in before:opacity-0 hover:before:translate-x-0 hover:before:opacity-100 "
        >
          Items
        </a>
        <a
          href="/pokeball"
          className="relative hover:text-blue-400 before:content-[''] before:absolute before:w-full before:h-1 before:bg-blue-400 before:rounded-md before:-bottom-1 before:-translate-x-full  before:transition-all before:ease-in before:opacity-0 hover:before:translate-x-0 hover:before:opacity-100 "
        >
          Poké Ball
        </a>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/188/188940.png"
        alt="ball"
        className="w-[70px] object-cover ml-auto cursor-pointer"
      />
    </div>
  );
};

export default HeaderHome;
