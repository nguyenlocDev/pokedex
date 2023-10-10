import React, { useEffect, useState } from "react";
import HeaderHome from "../components/HeaderHome";
import axios from "axios";
import { PokeData, PokeInter } from "../script/interFacePoke";
import PokeItems from "../components/PokeItems";
import Loading from "../components/Loading";
import InfoCardPoke from "../components/InfoCardPoke";

const HomePage: React.FC = () => {
  const [pokemon, setPokemont] = useState<PokeInter[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokeData, setPokeData] = useState<PokeData>();
  console.log(pokeData);
  interface Pokemon {
    name: string;
    url: string;
  }
  const handleLoadMorePoke = async () => {
    setIsLoading(true);
    const res = await axios.get(nextUrl);
    setNextUrl(res?.data?.next);
    res.data.results.forEach(async (items: Pokemon) => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${items.name}`
      );
      setPokemont((p) => [...p, res.data]);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    setIsLoading(true);
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
      );
      setNextUrl(res?.data?.next);
      res.data.results.forEach(async (items: Pokemon) => {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${items.name}`
        );
        setPokemont((p) => [...p, res.data]);
        setIsLoading(false);
      });
    };

    getPokemon();
  }, []);
  return (
    <>
      {isLoading ? <Loading /> : ""}
      {pokeData?.isOpen ? (
        <InfoCardPoke pokeData={pokeData} setPokeData={setPokeData} />
      ) : (
        ""
      )}
      <div className=" relative flex flex-col w-full h-full overflow-y-auto items-center py-5">
        <HeaderHome />
        <PokeItems poke={pokemon} setPokeData={setPokeData} />
        <button
          className="p-3 text-white rounded-md font-semibold text-xl bg-blue-400 w-[200px] hover:bg-blue-600 transition-all ease-linear"
          onClick={handleLoadMorePoke}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default HomePage;
