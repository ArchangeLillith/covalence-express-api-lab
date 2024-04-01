const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");

let app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
