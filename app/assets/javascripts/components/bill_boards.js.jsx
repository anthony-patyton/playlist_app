
const url = "http://localhost:3000/bill_boards/"

const BillBoards = ({ billboards }) => {
	return (
			<div>
				<h1>All BillBoards</h1>
        <ul>
          { billboards.map( bill => (
            <li key={bill.id}>
            {bill.title}
            {" "}
            <a href={url + bill.id}>show</a>
            </li>
          ))}
        </ul>
			</div>
	)
};
