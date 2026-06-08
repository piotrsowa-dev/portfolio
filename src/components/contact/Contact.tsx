import "./Contact.css"
function Contact() {
  return (
    <div className="contact"  data-aos="fade-in">
        <div className="emailzone" id="kontakt">
            <h1>Skontaktuj się ze mną</h1>
            <form action="https://formspree.io/f/mnjrlaja" method="POST">
                <label htmlFor="email">Podaj e-mail: </label><br />
                <input type="email" name="email" id="email" required placeholder="Adres E-mail" /><br />
                <label htmlFor="message" >Twoja wiadomość: </label><br />
                <textarea name="message" id="message" maxLength={250} required placeholder="Max 250 znaków"></textarea><br />
                <button type="submit">Wyślij</button><br />
            </form>
        </div>
        <div className="dane-kontaktowe">
            <h1>Dane kontaktowe</h1>
            <h3>Numer telefonu</h3>
            <p>+48 798 648 422</p>
            <h3>Adres E-mail</h3>
            <p>piotrek.sowa.dev@gmail.com</p>
        </div>
    </div>
  )
}

export default Contact