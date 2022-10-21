
export function Navbar(){
  return(
    <div className="navbar">
      <span className="logo">Chat Aleatorio</span>
      <div className="user" >
        <img src="https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}