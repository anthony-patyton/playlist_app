
const BillBoardNew = ({ billboard }) => {
  const { title } = billboard
  const defaultTitle = title ? title : '';
  return(
    <div>
      <form action="/bill_boards" method="post">
        <input
          placeholder="BillBoard: title"
          type="text"
          defaultValue={defaultTitle}
          name= 'billboard[title]'
        />
        <button type="submit">Add BillBoard</button>
      </form>
    </div>
  )
};

