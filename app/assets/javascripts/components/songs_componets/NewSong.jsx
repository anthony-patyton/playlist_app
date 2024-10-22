const NewSong = ({ artist, song}) => {
  const { id } = artist;
  const { title } = song;
  const defaultTitle = title ? title : '';
  return(
    <div>
      <h1>Create New Song</h1>
      <form action={`/artists/${id}/songs`} method="post">
        <p>Title:</p>
        <input defaultValue={defaultTitle} name="song[title]" type="text" />
        <button type="submit">Create Song</button>
      </form>
    </div>
  )
};
