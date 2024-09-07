
import { AuthNav } from "../AuthNav/AuthNav"
import s from './AppBar.module.css'

export const AppBar = () => {

    return (
        <header className={s.header}>
            <div className={s.container}>
                <AuthNav/>
            </div>
        </header>
    )
}