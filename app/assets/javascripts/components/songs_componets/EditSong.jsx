
const EditSong = ({ artist, song }) => {
  const { id } = artist;
  const { title } = song;
  const defaultTitle = title ? title : '';
  return(
    <div>
      <form action={`/artists/${id}/songs/${song.id}`} method="post">
        <input type="hidden" name="_method" value="put" />
        <p>Title:</p>
        <input defaultValue={defaultTitle} name="song[title]" type="text" />
        <button type="submit">Update</button>
      </form>
    </div>
  )
};
