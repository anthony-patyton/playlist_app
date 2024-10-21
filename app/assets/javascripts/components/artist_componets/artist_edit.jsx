
const ArtistEdit = ({ billboard, artist }) => {
  const { first_name, last_name, id } = artist;

  return(
    <div>
      <h1>Edit {first_name} {last_name}</h1>
      <form action={`/bill_boards/${billboard.id}/artists/${id}`} method="post">
        <input type='hidden' name='_method' value='patch'/>
        <p>First name:</p>
        <input defaultValue={first_name} name="artist[first_name]" />
        <input defaultValue={last_name} name="artist[last_name]" />
        <button type="submit">Update</button>
      </form>
    </div>
  )
};
