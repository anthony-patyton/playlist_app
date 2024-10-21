
const Artist = ({ billboard, artist }) => {
  const { title, id } = billboard;
  const { first_name, last_name } = artist;
  return(
    <div>
      <h1>Artist</h1>
      <h2>{first_name} {last_name}</h2>
      <a href = {`/bill_boards/${id}/artists/`}>Back to Artist</a>
      {" "}
      <a href = {`/bill_boards/${id}`}>Back to {title} billboard</a>
    </div>
  )
};
