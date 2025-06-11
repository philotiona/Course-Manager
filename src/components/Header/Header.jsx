import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import { logoutUserThunk } from "../../store/user/thunk";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const userName = useSelector(state => state.user.name);

    const handleLogout = async () =>  {
        await dispatch(logoutUserThunk());
        navigate("/login");
    };

    const isNotAuth = location.pathname === "/register" || location.pathname === "/login";
    return (
        <header className={styles.header}>
            <Logo />
            {!isNotAuth && (
                <div className={styles.rightSection}>
                    <p>Hi, {userName}!</p>
                    <Button text="LOGOUT" className="w180" onClick={handleLogout}/>
                </div>
            )}
        </header>
    );
};

export default Header;