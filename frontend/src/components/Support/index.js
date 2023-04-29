import "./style.css"

const Support = () => {
    return (
        <div className="about-us-container">
            <header className="header1">
                <h1 className="h1">Support</h1>
                <div class="content">
                    <div>
                    <p className="p1">{`We hope that you do not encounter any problems, but you can contact us if you encounter any problem on the site`}</p>
                    <p className="p1">{`to contact us you can send email on:`}</p>
                    <li className="contect-us">Mohammed@taslee7.com</li>
                    <li className="contect-us">Ahmad@taslee7.com</li>
                    <li className="contect-us">Omar@taslee7.com</li>
                    <li className="contect-us">Anas@taslee7.com</li>
                    <br/><p className="p1">{`or you can call us on:`}</p>
                    <li className="contect-us">+9620799999999</li>
                    <li className="contect-us">+9620788888888</li>
                    <li className="contect-us">+9620777777777</li>
                    </div>
                    <img className="img1" src="https://i.pinimg.com/564x/2a/94/e3/2a94e33f7afe6600fe9c97eda3a386b3.jpg"/>
                </div>
            </header>
        </div>
    )
}
export default Support