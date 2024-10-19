
const BillBoard = ({ billboard }) => {
  const { id, title } = billboard;
  return(
    <div>
      <h1>id: { id }</h1>
      <h2>{ title }</h2>
      <h2>
        {" "}
        <a href="/bill_boards">back</a>
      </h2>
    </div>
  )
};
