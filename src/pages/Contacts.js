function Contacts() {
    return(
        <main className="section">
            <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Taganrog, Russia</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+79051234567">+7 (989) 525-35-41</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:webdev@protonmail.com">webkolesnikov77@gmail.com</a></p>
                        </li>
                    </ul>

            </div>
    </main>
    )
}

export default Contacts;