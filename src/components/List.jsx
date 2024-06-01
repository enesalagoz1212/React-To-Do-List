import ListItem from "./ListItem";
import styles from "../CustomStyle.module.css";

const List = ({ tasks, removeTask, setTask, isChecked }) => {
  return (
    <div className={styles.list}>
      {tasks.map((item) => {
        return <ListItem key={item.id} item={item} removeTask={removeTask} setTask={setTask} isChecked={isChecked} />;
      })}
    </div>
  );
};

export default List;
