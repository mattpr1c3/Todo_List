import query from "./db/utils.js";

const findCompleted = async () => {
  console.log("finding all")
  return query("SELECT is_completed, title FROM tasks WHERE is_completed");
}

const findAll = async () => {
  console.log("finding all1")
  return query("SELECT task_id, is_completed, title FROM tasks");
};

const findOne = async (id) => {
  console.log("finding all2")
  return query("SELECT task_id, is_completed, title FROM tasks WHERE task_id = ?", [
    id,
  ]);
};

const addOne = async (taskData) => {
  console.log(taskData)
  console.log("adding task")
  return await query("INSERT INTO tasks SET ?", [taskData]);
};

const updateOne = async (id, taskData) => {
    console.log(taskData)
    console.log("finding all4")
    return await query("UPDATE tasks SET ? WHERE task_id = ?", [
      taskData,
      id,
    ]);
  };
  
  const removeOne = async (id) => {
    console.log("finding all5")
    return await query("DELETE FROM tasks WHERE task_id = ?", [id]);
  };

  export default {
    findAll,
    findOne,
    addOne,
    updateOne,
    removeOne,
    findCompleted,
  };