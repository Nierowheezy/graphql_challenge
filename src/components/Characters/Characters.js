import { useCharacters } from "../../hooks/useCharacters";
import "./CharacterList.css";

const Characters = () => {
  const { data } = useCharacters();

  return (
    <div className="CharacterList">
      {data?.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
