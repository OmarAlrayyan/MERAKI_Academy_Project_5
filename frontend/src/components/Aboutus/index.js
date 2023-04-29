import "./style.css"

const Aboutus = () => {
    return (
        <div className="about-us-container">
            <header className="header1">
                <h1 className="h1">About us</h1>
                <div class="content">
                    <img className="img1"src="https://media.istockphoto.com/id/1287092837/vector/seo-search-engine-optimization-business-data-analysis-concept-marketing-strategy-analytics.jpg?s=612x612&w=0&k=20&c=HrbRWq7uoyod_hx732w90VBnab8AbHRCYOmcUBaB8L4="/>
                    <div>
                    <p className="p1">{`Creative Minds Team :
                    We seek to develop websites aimed at facilitating working life through our programming expertise
                    `}</p>
                    <p className="p1">{`Through our website, you can search for a maintenance service provider for your home or even your workplace`}</p>
                    <p className="p1">{`You can also join us to become a service provider and thousands of people can reach you`}</p>
                    </div>
                    
                </div>
            </header>
        </div>
    )
}
export default Aboutus