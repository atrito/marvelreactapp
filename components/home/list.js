// Modules
import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";
// Components
import ListItem from "./list-item";
// Api
import { api } from "../../services/api";
// List
const List = ({ characters }) => {
  // State
  const [characterList, setCharacterList] = React.useState(characters);
  const [offset, setOffset] = React.useState(30);

  const fetchCharacters = async () => {
    const result = await axios(api.characters(offset));
    setCharacterList((prev) => [...prev, ...result.data.data.results]);
    setOffset((prev) => prev + 30);
  };

  return (
    <div className="flex justify-center w-full min-h-screen my-5">
      <div className="flex flex-col w-4/5 xl:w-3/5">
        <InfiniteScroll
          dataLength={characterList.length}
          next={fetchCharacters}
          hasMore={true}
          loader={
            <div className="flex w-full justify-center">
              <ThreeDots
                heigth="100"
                width="100"
                color="#E81126"
                ariaLabel="loading-indicator"
              />
            </div>
          }
          className="lg:p-10 text-center"
        >
          {characterList.map((character) => (
            <ListItem
              key={character.id}
              id={character.id}
              name={character.name}
              img={character.thumbnail}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default List;
