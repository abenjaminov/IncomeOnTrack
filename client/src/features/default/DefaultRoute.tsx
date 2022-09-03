import { Navigate } from "react-router-dom"
import { Route } from "../../router"
import { useAuth } from "../../shared/hooks";

export const DefaultRoute: React.FC = () => {

    const {isLogginIn} = useAuth();

    return (
        <>
            {!isLogginIn && <Navigate to={Route.login} />}
            {isLogginIn && <div>Logged in</div>}
        </>
    )
}