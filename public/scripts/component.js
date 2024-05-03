class Component {
    constructor() {
        if (new.target === Component) {
            throw new Error('Cannot instantiate abstract class');
        }
    }

    render() {
        throw new Error("Methode 'render' must be implemented!");
    }
}

export default Component;