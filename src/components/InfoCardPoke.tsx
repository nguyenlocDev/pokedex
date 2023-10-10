import React from "react";
import Overlay from "./Overlay";
import { PokeData } from "../script/interFacePoke";

interface Props {
  pokeData: PokeData;
  setPokeData: React.Dispatch<React.SetStateAction<PokeData | undefined>>;
}

const InfoCardPoke: React.FC<Props> = (props) => {
  const { pokeData, setPokeData } = props;

  return (
    <>
      <Overlay>
        <div className="w-[400px] h-[600px] bg-gradient-to-br from-backgroundColorCard to-backgroundColorBottom rounded-2xl shadow-xl flex flex-col items-center gap-y-3 p-5">
          <div className="flex w-full justify-between text-gray-400 text-2xl">
            <i
              className=" cursor-pointer rounded-full shadow-2xl shadow-white  w-14 h-14  flex items-center justify-center fa-solid fa-chevron-left"
              onClick={() => setPokeData({ ...pokeData, isOpen: false })}
            ></i>
            <i className=" cursor-pointer rounded-full shadow-2xl shadow-white  w-14 h-14 flex items-center justify-center fa-regular fa-heart"></i>
          </div>
          <div className="w-[60%] flex flex-col gap-5 items-center">
            <img
              src={pokeData.sprites.other.home.front_default}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="text-white font-semibold flex w-full flex-col items-center">
              <p className="text-3xl ">{pokeData.name}</p>
              <div className="w-full flex gap-2 justify-center">
                {pokeData.types.map((items) => (
                  <span className="font-normal text-gray-400">
                    {items.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden rounded-2xl bg-backgroundColorCard shadow-2xl p-3 flex flex-col ">
            <ul className="flex justify-between  border-b border-gray-600 pb-3">
              <li className="flex flex-col items-center ">
                <span className="text-white">{pokeData.weight}g</span>
                <span className="text-blue-400">Weight</span>
              </li>
              <li className="flex flex-col items-center ">
                <span className="text-white">{pokeData.height}dm</span>
                <span className="text-blue-400">Height</span>
              </li>
              <li className="flex flex-col items-center ">
                <span className="text-white">
                  {pokeData?.stats?.map((data) => {
                    return data.stat.name === "attack" ? data.base_stat : "";
                  })}
                </span>
                <span className="text-blue-400">Attack</span>
              </li>
              <li className="flex flex-col items-center ">
                <span className="text-white">
                  {pokeData?.stats?.map((data) => {
                    return data.stat.name === "defense" ? data.base_stat : "";
                  })}
                </span>
                <span className="text-blue-400">Defence</span>
              </li>
            </ul>
            <div className="w-full h-full py-3 flex flex-col gap-y-2 overflow-hidden">
              <span className="text-white">Description</span>
              <p className="w-full h-full text-gray-500 ellipsis2Line">
                Whenever PIKACHU comes across something new, it blasts it with a
                jolt of electricity. If you come across a blackened berry, it's
                evidence that this POKéMON mistook the intensity of its charge.
              </p>
            </div>
          </div>
        </div>
      </Overlay>
    </>
  );
};

export default InfoCardPoke;
