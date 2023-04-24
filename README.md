# Welcome to the Todo-List app!

## Description
Have you ever wanted to keep track of your daily tasks but not wanted to go through the hassle of having to use a pen and paper? If so, then the Todo-List app is for you. It allows you to digitally track your daily productivity in an easy and user friendly manner.

## Here is how to get started (it's very simple)
- First, type a task into the task bar
- Then, click on the "create task" button. This will add your task to the task list below
- Once you have entered and created your desired number of tasks, you can complete them by clicking the small circle to the left of each task. This will cause a checkmark to appear next to it, marking the task as completed. You will see your number of completed tasks (near the upper right hand area) begin to increment as well
- After completing all your tasks, you can delete them as needed by clicking the trash can icon to the right of each task
- If you need to close the tab at any point, don't worry about losing your current tasks. The built in local storage function allows the browser to remember and continue to track any previously entered tasks
- And there you have it, you are ready to begin tracking your daily tasks!

## What I learned
I learned that when I would refresh the browser, the current tasks would disappear because the browser had no memory of them by default. To fix this, I needed to add some functionality to the code to enable local storage so that even when the browser and/or tab was closed or refreshed, the tasks would remain. Here is a TLDR of that logic:

```
const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState([])
  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }
  useEffect(() => {
    loadSavedTasks();
  }, [])
  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
```
## Links
Please, click this [Link](https://watch.screencastify.com/v/9NpUsZ7gDEm7iZTf0WwH) to view a detailed walkthrough video of how to use the app.

## Questions?
My github username is mattpr1c3 and please feel free to email me at matthew.pr1c3@gmail.com for any questions, comments, or concerns.