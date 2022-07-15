import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import "./App.css";
import SongRow from "./components/SongRow/SongRow";
import { FILTERED_SONGS } from "./graphql/queries";
import { useDeleteSongItem } from "./hooks";

function App() {
  const [filter, setFilter] = useState("");
  const { data, loading } = useQuery(FILTERED_SONGS, {
    variables: { filter: filter },
  });
  const { deleteSong } = useDeleteSongItem(filter);

  // const songList = data.songs;

  return (
    <div className="App">
      <header className="App-header">
        <h3>Search Your Fav Songs:</h3>
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              onChange={(e) => setFilter(e.target.value)}
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="sort_filter">
          <button type="text" className="filterButton">
            Filter By
          </button>
          <button type="text" className="sortButton">
            Sort By Name
          </button>
        </div>
        {!data || loading ? (
          <div>loading...</div>
        ) : (
          <SongRow deleteSong={deleteSong} data={data} />
        )}
      </header>
    </div>
  );
}

export default App;
