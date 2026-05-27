import "./Nav.css"
function Nav() {
  return (
    <nav  data-aos="fade-in" data-aos-duration="1000">
        <div className="left-nav">
            <div className="name">Piotr Sowa</div>
        </div>
        <div className="right-nav">
            <a href="#about"><div className="menus">About</div></a>
            <a href="#portfolio"><div className="menus">Portfolio</div></a>
            <a href="#kontakt"><div className="menus">Kontakt</div></a>
        </div>
    </nav>
  )
}

export default Nav

