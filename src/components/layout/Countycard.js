import { NavLink } from "react-router-dom";
export const Countycard = ({ country }) => {
    const { flags, name, population, region, capital } = country
    return <li className="country-card card" >
        <div className="container-card bg-white-box ">
            <img src={flags.svg} alt={flags.alt} />
            <div className="countryInfo">

                <p className="card-title">
                    {name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}
                </p>
                <p className=''>
                    <span className='card-description'> population:</span>{population.toLocaleString()}

                </p>
                <p className=''>
                    <span className='card-description'> region:</span>{region}

                </p>
                <p className=''>
                    <span className='card-description'> capotal:</span>{capital[0]}

                </p>
                <NavLink  to={`/country/${name.common}`}>
                    <button className="">Read more</button>

                </NavLink >
            </div>
        </div>

    </li>
}   