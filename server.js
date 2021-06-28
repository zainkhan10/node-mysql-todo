const express = require("express");
const todoRoutes = require("./routes/todo.routes");
const app = express();

app.use(express.json({ extended: false }));

app.use("/api/todo", todoRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
