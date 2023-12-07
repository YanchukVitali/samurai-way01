import  "./Navigation.module.css";
import n from "./Navigation.module.css"
export const Navigation = () => {
    return (
        <nav className={n.nav}>
            <ul>
                <a href="/profile">Profile</a>
                <a href="/message">Message</a>
                <a href="/news">News</a>
                <a href="/music">Music</a>
                <a href="/settings">Settings</a>
            </ul>
        </nav>
    )
}