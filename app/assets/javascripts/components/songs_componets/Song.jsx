
const Song = ({ artist, song }) => {
  const { first_name, last_name, id } = artist;
  const { title } = song;
  const fullName = first_name + " " + last_name;
  return(
    <div>
      <h1>Song: { title }</h1>
      <h2>belongs to { fullName }</h2>
      <a href={`/artists/${id}/songs`}>back</a>
    </div>
  )
};
