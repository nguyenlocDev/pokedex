interface TypePoke {
  type: {
    name: string;
    url: string;
  };
}
export interface PokeInter {
  id: string;
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: TypePoke[];
}
interface dataAttDef {
  base_stat: string;
  stat: {
    name: string;
    url: string;
  };
}
export interface PokeData extends PokeInter {
  isOpen?: boolean;
  weight?: string;
  height?: string;
  stats?: dataAttDef[];
}
