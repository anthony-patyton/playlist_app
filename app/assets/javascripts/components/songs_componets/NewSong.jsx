const NewSong = ( props ) => {
  const { id } = props.artist;
  const { title } = props.song;
  const defaultTitle = title ? title : '';
  return(
    <div>
      <h1>Create New Song</h1>
      <form action={`/artists/${id}/songs`} method="post">
        <p>Title:</p>
        {/* <input defaultValue={title}/> */}
        <button type="submit">Create Contact</button>
      </form>
    </div>
  )
};
