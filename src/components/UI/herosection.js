import { FaArrowRight } from "react-icons/fa";

function Herosection() {
    return (
        <main classname="hero-section main">
            <div className="container  grid grid-two-cols home-element">
                <div className="hero-content">
                    <h1 className="heading-xl">explore  the world  ,one country  at a time</h1>

                    <p className="paagraph"> discover the history ,culcture ,and buity  of every nation. sort search and filter through countries to find the details you</p>

                    <button className="btn btn-darken btn-inline bg-white-box">start exploring
                        <FaArrowRight />

                    </button>
                </div>
                <div className="hero-image">
                    <img src="/image/worldimage.png" alt="image of  beauty" className="banner-image"></img>
                </div>



            </div>

        </main>
    )
}

export default Herosection;