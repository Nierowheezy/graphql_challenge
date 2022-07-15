import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import "./App.css";
import { FILTERED_SONGS } from "./graphql/queries";
import { useDeleteSongItem } from "./hooks";

function SongRow(props) {
  const deleteSongRow = () => {
    props.deleteSong({
      variables: { songId: props.songId },
    });
  };

  return (
    <li key={props.songId}>
      {props.title}{" "}
      <span onClick={deleteSongRow}>
        <i className="fa fa-times"></i>
      </span>
    </li>
  );
}

function App() {
  const [filter, setFilter] = useState("");
  const { data, loading, error } = useQuery(FILTERED_SONGS, {
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
        <button type="text" className="filterButton">
          Filter By
        </button>
        {!data || loading ? (
          <div>loading...</div>
        ) : (
          <ul>
            {data.songs.map((song) => (
              <SongRow
                deleteSong={deleteSong}
                key={song.id}
                songId={song.id}
                title={song.title}
              />
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
