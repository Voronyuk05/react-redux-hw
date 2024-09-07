import s from './Navigation.module.css'

export const Navigation = ({children}) => {

    return (
        <nav className={s.navbar}>
            {children}
        </nav>
    )
}