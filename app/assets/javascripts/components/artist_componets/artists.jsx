
const handleDeleteArtist = ( id, artistId ) => {
  fetch(`/bill_boards/${id}/artists/${artistId}`, {
    method: 'DELETE',
  });
  location.reload();
};

const Artists = ({ billboard, artists }) => {
  const { title, id } = billboard;
  return(
    <div>
      <h1>Artist: from { title } billboard</h1>
      { artists.map((art) => (
        <div key={art.id}>
          <a href={`/bill_boards/${id}/artists/${art.id}`}>
            <h1>{art.first_name} {art.last_name}</h1>
          </a>
          <a href={`/bill_boards/${id}/artists/${art.id}/edit`}>edit</a>
          {" "}
          <button onClick={() => handleDeleteArtist(id, art.id)}>delete</button>
        </div>
      ))}
      <a href={`/bill_boards/${id}`}>back to {title} billboard</a>
      <br />
      <a href={`/bill_boards/${id}/artists/new`}>Create Artist for {title} billboard</a>
      <br />
      <a href={`/bill_boards/`}>back to bill boards page</a>
    </div>
  )
};
