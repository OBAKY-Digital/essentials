class Modal {
    constructor(size, content) {
        this.size = size
        this.content = content
    }

    init() {
        const b = `
        <div class="modal">
            <div class="modal-content ${this.size}">${this.content}<div class="modal-close"><img src="https://img.icons8.com/material-rounded/20/ffffff/delete-sign.png" alt="close"/></div></div>
        </div>
        `
        $(b).hide().appendTo('#modalbox').fadeIn();
    }
}

export default Modal