import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";

const Header = () => {
    const [userName, setUserName] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem("name");
        if (name) {
            setUserName(name);
        }
    }, [])
    const handleLogout = () =>  {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        navigate("/login")
    }
    const isNotAuth = location.pathname === "/register" || location.pathname === "/login"
    return (
        <header className ={styles.header}>
            <Logo />
                {!isNotAuth && (
                    <div className={styles.rightSection}>
                        <p>Hi, {userName}!</p>
                        <Button text = "LOGOUT" className="w180" onClick={handleLogout}/>
                    </div>
                )}
        </header>
    )
}
export default Header;