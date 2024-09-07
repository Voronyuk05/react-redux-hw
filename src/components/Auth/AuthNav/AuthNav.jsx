import { Navigation } from "components/Navigation/Navigation"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "../../../redux/selectors"
import { UserMenu } from "../UserMenu/UserMenu"

export const AuthNav = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)

    return (
        <Navigation>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <h1>Contacts App</h1>
            {isLoggedIn ? (<UserMenu/>) : (
                <>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/registration'>Registration</NavLink>
                </>
            )}
        </Navigation>
    )
}