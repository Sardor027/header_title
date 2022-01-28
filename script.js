class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.selector)
        this.top = obj.top

        this.element.style.position = 'fixed';
        this.element.style.top = this.scroll()
        this.unit = obj.unit


        window.addEventListener('scroll', () => this.scroll())
    }

    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        }else if(this.unit == '%' || this.unit == undefined) {
            return (window.innerHeight / 100 * this.top) - this.element.clientHeight
        }
    }

    scroll() {
        this.window = this.scrollNumber()

        if(this.window - scrollY > 0) {
            this.element.style.top = this.window - scrollY + 'px';
        }else {
            this.element.style.top = 0
        }
    }
}

let myScroll = new Scroll({
    selector: '.header__nav',
    top: 100
})

class Hover {
    constructor(obj) {
        this.headerTitle = document.querySelector(obj.selector2)
        this.header = document.querySelector(obj.selector3)
        this.headerNav = document.querySelector(obj.selector4)

        this.headerTitle.addEventListener('mouseover', () => {
            this.headerTitle.style = `
                transition-duration: 1s;
                margin-top: ${this.randomPositionHeight()}px;
                margin-left: ${this.randomPositionWidth()}px;
                `    
            })
        }
    
    randomPositionWidth() {
        let width = window.innerWidth - this.headerTitle.clientWidth
        return Math.floor(Math.random() * width)
    }
    
    randomPositionHeight() {
        let height = this.header.clientHeight - this.headerNav.clientHeight - this.headerTitle.clientHeight;
        return Math.floor(Math.random() * height)
    }
}

let hover = new Hover({
    selector2: '.header__content',    
    selector3: '.header',    
    selector4: '.header__nav'    
})

class Menu {
    constructor(obj) {
        this.button = document.querySelector(obj.selector)
        this.close = document.querySelector(obj.selector2)
        this.content = document.querySelector(obj.selector3)
        this.menu = document.querySelector(obj.selector4)
        this.logo = document.querySelector(obj.selector5)
        this.nav = document.querySelector(obj.selector6)

        this.button.addEventListener('click', () => {
            this.openClose()
            this.addRemove()
        })

        this.close.addEventListener('click', () => {
            this.openClose()
            this.addRemove()
        })
    }

    openClose() {
        this.menu.classList.toggle('active')
    }

    addRemove() {
        if (this.menu.contains(this.content)) {
            this.content.remove()
            this.nav.insertBefore(this.content, this.logo)    
            this.content.classList.toggle('active')
        } else {
            this.menu.appendChild(this.content)
            this.content.classList.toggle('active')
        }
    }
}

let menu = new Menu({
    selector: '.header__nav-button',
    selector2: '.menu__btn',
    selector3: '.header__menu',
    selector4: '.menu',
    selector5: '.header__logo',
    selector6: '.header__nav'
})

console.log(menu);
