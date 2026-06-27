class BrainKernel {
    constructor() {
        this.modules = {};
    }

    register(name, module) {
        this.modules[name] = module;
        console.log(`[Kernel] Loaded ${name}`);
    }

    get(name) {
        return this.modules[name];
    }

    list() {
        return Object.keys(this.modules);
    }
}

module.exports = new BrainKernel();
