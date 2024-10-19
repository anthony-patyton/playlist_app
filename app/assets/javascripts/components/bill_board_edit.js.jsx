
const BillBoardEdit = ({ billboard }) => {
  const { title, id } = billboard;
  return(
    <div>
      <h1>Edit Page</h1>
      <form action={`/bill_boards/${id}`} method="post">
        <input type='hidden' name='_method' value='patch'/>
        <p>Title:</p>
        <input defaultValue={title} name="billboard[title]" />
        <button type="submit">Edit</button>
      </form>
    </div>
  )
};
