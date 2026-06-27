class Planner {
    createPlan(goal) {
        return [
            "Analyze Goal",
            "Select Agent",
            "Execute Task",
            "Store Memory",
            "Reflect"
        ];
    }
}

module.exports = new Planner();
