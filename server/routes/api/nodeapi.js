import express from "express";
import task from "../../tasks.controllers.js";

const router = express.Router();

router.get("/tasks/completed", async (req, res, next) => {
    let data = await task.findCompleted();
    res.json(data)
})

router.get("/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;
console.log("first")
  if (id) {
    data = await task.findOne(id);
  } else {
    data = await task.findAll();
  }

  res.json(data);
});

router.post("/", async (req, res, next) => {
  let taskData = req.body;
  console.log("posting", taskData)
  let data = await task.addOne(taskData);
  res.json(data);
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let taskData = req.body;
  let data = await task.updateOne(id, taskData);
  res.json(data);
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await task.removeOne(id);
  res.json(data);
});

export default router;