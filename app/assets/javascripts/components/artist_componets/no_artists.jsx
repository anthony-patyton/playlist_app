
const ArtistsNone = ({ billboard }) => {
  const { title, id } = billboard
  return(
    <div>
      <h1>There are no artists for {title}</h1>
      <p>Would you like to create a new artist</p>
      <a href={`/bill_boards/${id}/artists/new`}>Create New Artist</a>
      <h2>
        <a href={`/bill_boards/${id}`}>back</a>
      </h2>
    </div>
  )
};
