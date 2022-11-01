const express = require("express");
const cors = require("cors");
const path = require("path");
const router = express.Router();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
