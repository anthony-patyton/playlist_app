
const Songs = ( props ) => {
  const { first_name, last_name, id } = props.artist;
  const fullName = first_name + " " + last_name;
  return(
    <div>
      <h1>{ fullName }'s Songs</h1>
      { songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
        </div>
      ))}
      <a href={`/`}>back to { fullName }</a>
    </div>
  )
};
