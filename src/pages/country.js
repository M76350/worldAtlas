import {useEffect,  useState,  useTransition} from "react"
import { getCountryData } from "../api/postApi";
import Loder from "../components/UI/loder";
import { Countycard } from "../components/layout/Countycard";
function Country() {

    const[ispending,startTransition]=useTransition();
    const[countries,setcountry]=useState([      ]);
    useEffect(()=>{

        startTransition(async()=>{
            const res= await getCountryData();
            setcountry(res.data)
            // console.log(res)

        })
        

    },[]);

    if (ispending) return <Loder />
    return (
        <section className="country-section">
            <ul className="grid grid-four-cols">
                {
                    countries.map((curcountry,index)=>{
                        return <Countycard   country={curcountry} key={index}/>

                    })
                }

            </ul>
        </section>
    )
}

export default Country;