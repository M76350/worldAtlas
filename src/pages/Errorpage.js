import { NavLink, useRouteError } from "react-router-dom"

export default function Errorpage() {

    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Error page </h1>
            {error && <p>{error.message}</p>}
            <NavLink  to="/">  button
            Go Home</NavLink>
        </div>
    )
}