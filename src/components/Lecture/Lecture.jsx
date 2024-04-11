import styles from './Lecture.module.css';
const Lecture = () => {
  return (
    <>
      <div className={styles.cardLecture}>
        <img id="imageNews"alt="image-news"  src="https://www.bing.com/th?id=OVFT.eKLl2SGvVMuS5osg2W7T5C&pid=News&w=308&h=178&c=14&rs=2&qlt=90"/>
        <img id="logo-news" src="https://www.bing.com/th?id=ODF.8NA_BHS3JuKaVU01U_XDAg&pid=news&w=16&h=16&c=14&rs=2" />
        <p>Cérémonie d’ouverture des JO : Aya Nakamura a « tout à fait sa place » pour Emmanuel Macron</p>
        <p>Pour Emmanuel Macron, Aya Nakamura a « tout à fait sa place » à une cérémonie d ouverture des JO</p>
      </div>
    </>
  )
}

export default Lecture