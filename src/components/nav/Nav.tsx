import "./Nav.css"
function Nav() {
  return (
    <nav>
        <div className="left-nav">
            <div className="name">Piotr Sowa</div>
        </div>
        <div className="right-nav">
            <a href="#about"><div className="menus">About</div></a>
            <a href="#portfolio"><div className="menus">Portfolio</div></a>
            <div className="menus">Kontakt</div>
        </div>
    </nav>
  )
}

export default Nav

