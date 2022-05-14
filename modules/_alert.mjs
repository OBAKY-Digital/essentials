class Alert {
    constructor(icon, alt, color, text) {
        this.icon = icon;
        this.alt = alt;
        this.color = color;
        this.text = text;
    }

    init() {
        const b = `
        <div class="alert-${this.color}">
            <img src="https://img.icons8.com/material-rounded/20/000000/${this.icon}.png" alt="${this.alt}"/>
            <p>${this.text}</p>
        </div>
        `
        $(b).appendTo('#alertbox').animate({left: 0}, 1500).delay(5000).animate({left: '100vw'}, 3000).queue(function () {
            $(this).remove()
        });
    }
}

/*
*
*   Some examples:
*       - alert + warning
*       - delete-sign + danger
*
*/

export default Alert