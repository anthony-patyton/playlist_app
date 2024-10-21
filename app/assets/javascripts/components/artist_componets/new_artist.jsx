const ArtistNew = ({ billboard, artist }) => {
  const { id } = billboard;
  const { first_name, last_name, errors } = artist;
  const defaultFirstName = first_name ? first_name : '';
  const defaultLastName = last_name ? last_name : '';
  return(
    <div>
      <h1>Create New Artist</h1>
      { errors && errors }
      <form action={`/bill_boards/${id}/artists`} method="post">
        <p>First Name:</p>
        <input defaultValue={defaultFirstName} name="artist[first_name]" type="text" />
        <p>Last Name:</p>
        <input defaultValue={defaultLastName} name="artist[last_name]" type="text" />
        <br />
        <button type="submit">create</button>
      </form>
    </div>
  )
};
