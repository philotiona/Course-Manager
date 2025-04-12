import styles from "./Logo.module.css";
import logo from "./Vector.svg";
export default function Logo() {
    return <img className ={styles.logo} src={logo} alt="" />
};
