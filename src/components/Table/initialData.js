const data = {
  tasks: {
    task1: { id: "task1", content: "content1" },
    task2: { id: "task2", content: "content2" },
    task3: { id: "task3", content: "content3" },
  },

  columns: {
    column1: {
      id: "column1",
      name: "table1",
      taskIds: ["task1", "task2", "task3"],
    },
    column2: {
      id: "column2",
      name: "table2",
      taskIds: [],
    },
    column3: {
      id: "column3",
      name: "table3",
      taskIds: [],
    },
    column4: {
      id: "column4",
      name: "table4",
      taskIds: [],
    },
  },
  columnsOrder: ["column1", "column2", "column3", "column4"],
}

export default data
