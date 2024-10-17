
const BillBoard = ({ billboard }) => {
  const { id, title } = billboard
  return(
    <div>
      <h1>id: { id }</h1>
      <h2>{ title }</h2>
    </div>
  )
} 
