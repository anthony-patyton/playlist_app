
const billBoardUrl = "http://localhost:3000/bill_boards/";

const handleDelete = ( id ) => {
  fetch(`/bill_boards/${id}`, {
    method: 'DELETE',
  });
  location.reload();
};

const BillBoards = ({ billboards }) => {
	return (
    <div>
      <h1>All BillBoards</h1>
      <ul>
        { billboards.map( bill => (
          <li key={bill.id}>
          {" "}
          <a href={billBoardUrl + bill.id}>{bill.title}</a>
          {" "}
          <a href={billBoardUrl + bill.id + "/edit"}>edit</a>
          {" "}
          <button onClick={() => handleDelete(bill.id)}>delete</button>
          </li>
        ))}
      </ul>
      <a href={billBoardUrl + "new"}>Create a new Bill board</a>
    </div>
	)
};
