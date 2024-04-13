import LectureItem from "../Lecture/LectureItem";
import styles from "./GridLectures.module.css";

const GridLectures = () => {
  return (
    <>
      <div className={styles.gridLectures}>
      <h1 className={styles.titleLectures}>Dernières lectures lus</h1>
        <div className={styles.gridLastLectures}>
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
       
        </div>
        <h1 className={styles.titleLectures}>Dernières lectures ajoutés</h1>
        <div className={styles.gridAddedLectures}>
          
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
           

          </div>
          <h1 className={styles.titleLectures}>Lectures ajoutés dans Favoris</h1>
        <div className={styles.gridAddedLecturesToFavorites}>
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
        </div>
      </div>
    </>
  );
};

export default GridLectures;
