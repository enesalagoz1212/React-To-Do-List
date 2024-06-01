import { postTask, putTask } from "../service/request";
import styles from "../CustomStyle.module.css";

const ToDoForm = ({ tasks, setTasks, task, setTask, isChecked }) => {
  const addTask = async (e) => {
    e.preventDefault();
    const updatedTask = tasks.find((item) => item.id === task.id); // tasks dizisindeki her bir item kontrol eder  id ler işeit se find fonk. o görevi döndürür
    if (!updatedTask) {
      const newTask = {
        id: crypto.randomUUID(),
        ...task,
      };
      await postTask(newTask);
      setTasks([...tasks, newTask]);
    } else {
      const renewTask = {
        ...task,
        updateDate: new Date().toLocaleString(),
        status: isChecked ? "completed" : "pending",
      };
      await putTask(updatedTask.id, renewTask);
      setTasks(tasks.map((item) => (item.id === updatedTask.id ? renewTask : item)));
    }

    setTask({
      task: "",
      desc: "",
      addDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
      status: "",
    });
  };
  return (
    <>
      <form className={styles.form} id="form" onSubmit={addTask}>
        <input
          className={styles.toDoFormInput}
          type="text"
          placeholder="Görev Adı..."
          onChange={(e) => setTask({ ...task, task: e.target.value })}
          value={task.task}
        />
        <textarea
          className={styles.toDoFormInput}
          type="text"
          placeholder="Açıklama..."
          onChange={(e) => setTask({ ...task, desc: e.target.value })}
          value={task.desc}
        />
        {task.id ? (
          <button className={styles.customButton} type="submit">
            Güncelle
          </button>
        ) : (
          <button className={styles.customButton} type="submit">
            Ekle
          </button>
        )}
      </form>
    </>
  );
};

export default ToDoForm;
