import styles from "./Header.module.css";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
const Header = (props) => {
    const isAuthenticated = true;
    return (
        <header className ={styles.header}>
            <Logo />
            <span>{props.name}</span>
            <div className={styles.rightSection}>
                <Button text = "LOGIN" className="w180"/>
            </div>
        </header>
    )
}
export default Header;