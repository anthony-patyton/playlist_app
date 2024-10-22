const url = "http://localhost:3000/";

const Navbar = () => {
  return(
    <div>
      <a href={url}>Home</a>
      {" "}
      <a href={url + "about"}>About</a>
      {" "}
      <a href={url + "/bill_boards/"}>Bill Boards</a>
    </div>
  )
};
