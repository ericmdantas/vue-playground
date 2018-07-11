export default class Todo {
    constructor(t) {
        this.id = undefined
        this.title = ""
        this.completed = false

        Object.assign(this, t)
    }

    isValid() {
        return !!this.title.length
    }
}