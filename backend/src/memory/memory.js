class Memory {
    constructor() {
        this.memories = [];
    }

    save(item) {
        this.memories.push(item);
    }

    all() {
        return this.memories;
    }
}

module.exports = new Memory();
