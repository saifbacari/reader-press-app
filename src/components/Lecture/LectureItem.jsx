import styles from './LectureItem.module.css';
const Lecture = () => {
  const title = 'Cérémonie d’ouverture des JO : Aya Nakamura a « tout à fait sa place » pour Emmanuel Macron';
  const description = 'Pour Emmanuel Macron, Aya Nakamura a « tout à fait sa place » à une cérémonie d ouverture des JO';
  const urlLogo="https://www.bing.com/th?id=ODF.8NA_BHS3JuKaVU01U_XDAg&pid=news&w=16&h=16&c=14&rs=2"
  const urlImage="https://www.bing.com/th?id=OVFT.eKLl2SGvVMuS5osg2W7T5C&pid=News&w=308&h=178&c=14&rs=2&qlt=90"
  const date = new Date();
  return (
    <>
      <div className={styles.cardLecture}>
        <div className={styles.contentImageLogo}>
          <img className={styles.imageNews} alt="image-news"  src={urlImage}/>
          <img className={styles.logoNews} src={urlLogo} />  
        </div>
        <div className={styles.contentText}>
          <p className='date-creation'>{date.toISOString()}</p>
          <p className='title'>{title}</p>
          <p className='description-text'>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Lecture