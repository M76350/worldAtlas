import { useEffect, useState } from "react";
import { NavLink, useRouteError } from "react-router-dom"

export default function Errorpage() {
    const [isSmall, setIsSmall] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const onResize = () => setIsSmall(window.innerWidth <= 768);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
      }, []);
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#d3d3d3",
        fontFamily: "Arial, sans-serif",
      };
    
      const contentStyle = {
        display: 'flex',
        flexDirection: isSmall ? 'column' : 'row',
        alignItems: 'center',
        gap: '40px',
        textAlign: 'left',
      };
      const imageStyle = {
        width: "300px",
        height: "auto",
      };
    
      const headingStyle = {
        fontSize: "11vw",
        color: "#2f4fff",
        margin: "0",
        
      };
    
      const subHeadingStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "10px",
      };
    
      const paragraphStyle = {
        fontSize: "16px",
        color: "#555",
        margin: "10px 0 20px 0",
      };
    
      const buttonStyle = {
        padding: "12px 24px",
        backgroundColor: "#2f4fff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
      };

    const error = useRouteError();
    console.log(error);
    return (
        // <div>
        //     <h1>Error page </h1>
        //     {error && <p>{error.message}</p>}
        //     <NavLink  to="/">  button
        //     Go Home</NavLink>

            
        // </div>
        <div style={containerStyle} className="grid grid-two-cols">
        <div style={contentStyle}>
          <img
            src="./image/error-img.png" // Replace with your server image path
            alt="Not Found Illustration"
            style={imageStyle}
          />
          <div>
            <h1 style={headingStyle}>Opps!</h1>
            <p style={subHeadingStyle}>
              We Can't Seem to Find The Page You're Looking For.
            </p>
            <p style={paragraphStyle}>
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            {/* <button style={buttonStyle} onClick={() => (window.location.href = "/")}>
              Go To Home
            </button> */}
            <NavLink  to="/"> 
            <button style={buttonStyle} >
              Go To Home
            </button>
           </NavLink>
          </div>
        </div>
      </div>
    )
}
