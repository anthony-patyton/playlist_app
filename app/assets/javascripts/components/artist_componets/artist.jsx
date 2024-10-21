
const Artist = ( props ) => {
  const { title, id } = props.billboard;
  const { first_name, last_name } = props.artist;
  const fullName = first_name + " " + last_name;
  return(
    <div>
      <h1>Artist</h1>
      <h2>{ fullName }</h2>
      <a href = {`/bill_boards/${id}/artists/`}>Back to Artist</a>
      <br />
      <a href = {`/bill_boards/${id}`}>Back to {title} billboard</a>
      <br />
      <a href = {`/artists/${props.artist.id}/songs`}>{ fullName } Songs</a>
    </div>
  )
};
