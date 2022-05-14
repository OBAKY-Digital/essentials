class Collapse {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    init(target) {
        const b = `
        <div class="collapse">
        <div class="collapse-title">${this.title}</div>
        <div class="collapse-content">${this.content}</div>
        </div>
        `
        $(b).hide().appendTo(target).slideDown();
    }
}

export default Collapse