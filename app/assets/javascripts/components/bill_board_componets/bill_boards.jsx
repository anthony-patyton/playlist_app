
const url = "http://localhost:3000/bill_boards/";

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
          <a href={url + bill.id}>{bill.title}</a>
          {" "}
          <a href={url + bill.id + "/edit"}>edit</a>
          {" "}
          <button onClick={() => handleDelete(bill.id)}>delete</button>
          </li>
        ))}
      </ul>
      <a href={url + "new"}>Create a new Bill board</a>
    </div>
	)
};
