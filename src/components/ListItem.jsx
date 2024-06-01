import { useState } from "react";
import styles from "../CustomStyle.module.css";
import { putTask } from "../service/request";

const ListItem = ({ item, removeTask, setTask }) => {
  const [isCheck, setIsCheck] = useState(item.status === "completed" ? true : false);
  const handleCheckboxChange = async (e) => {
    setIsCheck(e.target.checked);
    console.log(isCheck);
    await putTask(item.id, {
      ...item,
      status: isCheck ? "pending" : "completed",
    });
  };
  return (
    <>
      <div className={isCheck ? styles.listItemChecked : styles.listItem}>
        <div className={styles.taskInfos}>
          <h3>{item.task}</h3>
          <p>
            <i>
              <b>Açıklama:</b>
            </i>{" "}
            {item.desc}
          </p>
          <div className={styles.dates}>
            <p>
              <b>Ol. Tarihi:</b> <i>{item.addDate}</i>
            </p>
            <p>
              <b>Düz. Tarihi: </b>
              <i>{item.updateDate}</i>
            </p>
          </div>
        </div>
        <div className={styles.tools}>
          <input className={styles.checkbox} type="checkbox" checked={isCheck} onChange={handleCheckboxChange} />
          <div className={styles.btns}>
            <button className={styles.itemBtn} onClick={() => removeTask(item.id)}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
            <button className={styles.itemBtn} onClick={() => setTask(item)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
