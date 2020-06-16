const data = {
  tasks: {
    task1: { id: "task1", content: "content1" },
    task2: { id: "task2", content: "content2" },
    task3: { id: "task3", content: "content3" },
  },

  columns: {
    column1: {
      id: "column1",
      name: "table",
      taskIds: ["task1", "task2", "task3"],
    },
  },
  columnsOrder: ["column1"],
}

export default data
