import { useEffect, useState, useTransition } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryIndivisualData } from '../../api/postApi';
import Loder from '../UI/loder';

export const CountryDetails = () => {
    const { id } = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        startTransition(async () => {
            try {
                const res = await getCountryIndivisualData(id);
                if (res.status === 200 && Array.isArray(res.data)) {
                    setCountry(res.data[0]); // ✅ Use object, not array
                } else {
                    console.error('Invalid API response', res);
                }
            } catch (error) {
                console.error('Error fetching country details:', error);
            }
        });
    }, [id]);

    if (isPending) return <Loder />;

    if (!country) {
        return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading country details...</p>;
    }

    return (
        <section className=" container">
            <div className="container-card bg-white-box card country-details-card">
                <div className='grid-two-cols grid '>
                    <div>

                        <img
                            src={country.flags?.png}
                            alt={`${country.name?.common} flag`}
                            style={{ width: '400px', marginTop: '20px' }}
                        />
                    </div>
                    <div className='idicountry'>
                        <h1>{country.name?.common}</h1>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
                    </div>


                </div>
            </div>
        </section>
    );
};
