import styles from './Navbar.module.css'

const Navbar = () => {

    return (
        <div className={styles.navbar}>
                <p>Logo</p>
                <ul className={styles.navbarItems}>
                <li>Add to Favorites</li>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </ul>
        </div>
    )
}

export default Navbar