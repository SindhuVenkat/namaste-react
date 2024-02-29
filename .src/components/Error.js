import { useRouteError } from "react-router";

const Error =() => {

    const err = useRouteError()
    console.log(err)
    return(
        <div>
        <h1>This is Error Page</h1>
        {err.status} : {err.statusText}
        </div>
    )
}

export default Error