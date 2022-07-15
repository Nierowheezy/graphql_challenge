import "./SongRow.css";

const SongRow = (props) => {
  const deleteSongRow = (Id) => {
    props.deleteSong({
      variables: { songId: Id },
    });
  };

  return (
    <div className="table-margin-top">
      <table>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
        {props.data.songs.map((song, key) => {
          return (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>
                <span onClick={() => deleteSongRow(song.id)}>
                  <i className="fa fa-times"></i>
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default SongRow;
