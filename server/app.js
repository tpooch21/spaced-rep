const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(cors());
const port = process.env.PORT;

const problems = [
  {
    name: "Two Sum",
    dates: [
      ["12/14/20", false],
      ["12/16/20", true],
    ],
    difficulty: "Easy",
    url: "https://leetcode.com/problems/two-sum/",
    id: 1,
  },
  {
    name: "Rotate Image",
    dates: [
      ["12/18/20", false],
      ["12/20/20", true],
    ],
    difficulty: "Medium",
    url: "https://leetcode.com/problems/rotate-image/",
    id: 48,
  },
];

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Set up get route, which returns an array of problem objects
app.get("/", (req, res) => {
  res.send(problems).status(200);
});
