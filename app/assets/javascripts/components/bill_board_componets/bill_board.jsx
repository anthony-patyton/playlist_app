
const BillBoard = ({ billboard }) => {
  const { id, title } = billboard;
  return(
    <div>
      <h2>{ title }</h2>
      <h2>
        {" "}
        <a href="/bill_boards">back</a>
        <br />
        <a href={`/bill_boards/${id}/artists`}>Artists for {title}</a>
      </h2>
    </div>
  )
};
