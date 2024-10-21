
const NoSongs = ( props ) => {
  const { first_name, last_name, id, bill_board_id } = props.artist;
  const fullName = first_name + " " + last_name;
  return(
    <div>
      <h1>They're are no songs { fullName }</h1>
      <a href={`/artists/${id}/songs/new`}>Create Song</a>
      <br />
      <a href={`/bill_boards/${bill_board_id}/artists/${id}`}>Go back</a>
    </div>
  )
};
