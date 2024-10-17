
const BillBoardEdit = ({ billboard }) => {
  const { title, id } = billboard
  return(
    <div>
      <h1>Edit Page</h1>
      <form action={`/bill_boards/${id}`} method="patch">
        <input type='hidden' name='_method' value='patch'/>
          <p>Title</p>
          <input defaultValue={title} name='billboard[title]' />
          <button type="submit" >Update BillBoard</button>
      </form>
    </div>
  )
};
