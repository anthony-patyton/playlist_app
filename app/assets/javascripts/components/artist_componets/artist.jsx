
const Artist = ({ billboard, artist }) => {
  const { title, id } = billboard;
  const { first_name, last_name } = artist;
  const fullName = first_name + " " + last_name;
  return(
    <div>
      <h1>Artist</h1>
      <h2>{ fullName }</h2>
      <a href = {`/bill_boards/${id}/artists/`}>Back to Artist</a>
      <br />
      <a href = {`/bill_boards/${id}`}>Back to {title} billboard</a>
      <br />
      <a href = {`/artists/${artist.id}/songs`}>{ fullName } Songs</a>
    </div>
  )
};
