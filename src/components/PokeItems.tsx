import React, { useState } from "react";
import { PokeData, PokeInter } from "../script/interFacePoke";

interface Props {
  poke: PokeInter[];
  setPokeData: React.Dispatch<React.SetStateAction<PokeData | undefined>>;
}

const PokeItems: React.FC<Props> = (props) => {
  const { poke, setPokeData } = props;

  const handleDataPoke = (data: PokeInter) => {
    setPokeData({ isOpen: true, ...data });
  };
  return (
    <section className="flex gap-3 items-center flex-wrap w-full p-5 cursor-pointer">
      {poke.map((items) => {
        return (
          <div
            key={items.id}
            onClick={() => handleDataPoke(items)}
            className="w-[calc(25%-12px+3px)] h-[150px] bg-backgroundColorCard rounded-3xl p-5  flex gap-x-3 "
          >
            <div className="text-white font-semibold  flex flex-col gap-y-3 ">
              <p className="text-2xl">
                {items.name[0].toUpperCase() + items.name.slice(1)}
              </p>

              <div className="flex gap-x-3 font-normal text-gray-500 text-md">
                {items.types.map((items) => (
                  <span key={items.type.url}>{items.type.name}</span>
                ))}
              </div>
              <span className="text-blue-400">#{items.id}</span>
            </div>
            <img
              src={items.sprites.other.home.front_default}
              alt=""
              className="ml-auto hover:scale-150 transition-all ease-out drop-shadow-[0_5px_8px_rgba(5,163,255,0.25)]"
            />
          </div>
        );
      })}
    </section>
  );
};

export default PokeItems;
