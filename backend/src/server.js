const express = require("express");
const cors = require("cors");

const Executive = require("./executive/executive");
const Planner = require("./planner/planner");
const Memory = require("./memory/memory");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/think", (req, res) => {
    const goal = req.body.goal;

    const executive = Executive.process(goal);
    const plan = Planner.createPlan(goal);

    Memory.save({ goal, plan });

    res.json({
        executive,
        plan,
        memories: Memory.all()
    });
});

app.listen(3000, () => {
    console.log("🧠 OMNISYS Brain Running...");
});
