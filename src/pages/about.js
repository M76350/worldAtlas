import countryfacts from '../api/countrydata.json';

function About() {
    return (
        <>

            <section className='section-about container'>

                <h2 className='container-title'>
                    here are the  interesting facts <be /> we're proud of           </h2>
                <div className='gradient-cards'>
                    {
                        countryfacts.map((country) => {
                            const { id, countryName, capital, population, interestingFact } = country
                            return (
                                <div className='card' key={id}>
                                    <div className='container-card bg-blue-box'>
                                        <p className='card-title'> {countryName}</p>
                                        <p> <span className='card-description'> capital: </span>{capital}</p>
                                        <p className=''>
                                            <span className='card-description'> population:</span>{population}

                                        </p>
                                        <p className=''>
                                            <span className='card-description'> intersertingfacts: {interestingFact}</span>

                                        </p>


                                        <span className='card-description'> capital:</span>


                                    </div>
                                </div>
                            )

                        })
                    }

                </div>

            </section>

        </>
    )
}

export default About;