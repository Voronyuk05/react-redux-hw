import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../../redux/auth/authSlice"
import { Button } from "@mui/material"
import { getUser } from "../../../redux/selectors"
import s from './UserMenu.module.css'

export const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(getUser)

    function handleLogOut() {
        dispatch(logOut())
    }

    return (
        <div className={s.user_menu}>
            <p>{user.email}</p>
            <Button type="button" onClick={handleLogOut}>Logout</Button>
        </div>
    )
}