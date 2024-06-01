let data;
const url = "http://localhost:3000/toDoList";
export async function getTasks() {
  const response = await fetch(url);
  data = await response.json();
  return data;
}

export async function postTask(data) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  data = await response.json();
  return data;
}

export async function putTask(id, data) {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  data = await response.json();
  return data;
}

export const deleteTask = async (id) => {
  const newUrl = `${url}/${id}`;
  try {
    const response = await fetch(newUrl, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
