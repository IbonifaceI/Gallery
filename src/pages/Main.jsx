import { useContext } from "react";
import { DataContext } from "../createContext/context";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "../css/Main.module.css";

export const Main = ({ setPage, page }) => {
  const { data } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [indexImg, setIndexImg] = useState(null);

  const lightBoxIsOpen = (index) => {
    setIndexImg(index);
    setOpen(true);
  };

  return (
    <div className={styles.block}>
      <div className={styles.list}>
        {data ? (
          data.map((e, index) => (
            <div className={styles.item} key={e.id}>
              <h1>{e.title}</h1>
              <img width="150px" src={e.thumbnailUrl} alt="img" onClick={() => lightBoxIsOpen(index)} />
            </div>
          ))
        ) : (
          <div>lading</div>
        )}
      </div>
      <button className={styles.button} onClick={() => setPage(page + 1)}>
        Следующая страница
      </button>
      <div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={indexImg}
          slides={
            data &&
            data.map((e) => ({
              // width: 600,
              alt: `img${e.id}`,
              src: e.url,
            }))
          }
        />
      </div>
    </div>
  );
};
