
const handleDeleteSong = (id, song ) => {
  fetch(`/artists/${id}/songs/${song.id}`, {
    method: 'DELETE'
  });
  location.reload();
};

const Songs = ({ artist, songs }) => {
  const { first_name, last_name, id, bill_board_id } = artist;
  const fullName = first_name + " " + last_name;
  return(
    <div>
      <h1>{ fullName }'s Songs</h1>
      { songs.map((song) => (
        <div key={song.id}>
          <a href={`/artists/${id}/songs/${song.id}`}>
            <h3>{song.title}</h3>
          </a>
          <li>
            <a href = {`/artists/${id}/songs/${song.id}/edit`}>edit</a>
            {" "}
            <button onClick={() => handleDeleteSong(id, song)}>delete</button>
          </li>
        </div>
      ))}
      <a href={`/artists/${id}/songs/new`}>Create new Song</a>
      <br />
      <a href={`/bill_boards/${bill_board_id}/artists/${id}/`}>back to { fullName }</a>
    </div>
  )
};
