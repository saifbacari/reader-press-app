import styles from './Searchbar.module.css'

function Searchbar() {
  return (
    <div className={styles.searchbar}>
        <label htmlFor="nom">glass-logo</label>
        <input type="text" id="url-article" name="Search article" />
        <button>Search</button>
    </div>
  )
}

export default Searchbar