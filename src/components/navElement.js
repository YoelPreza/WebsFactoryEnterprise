import { LitElement, html, css } from 'lit';
import { TWStyles } from '../twlit'

export class NavELement extends LitElement {
    static styles = [ TWStyles,
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            brandName: { type: String },
            links: { type: Array }
        };
    }

    constructor(){
        super();
        this.brandName = "Webs Factory";
        this.links = [
            { name:'Inicio' },
            { name:'Acerca' },
            { name:'Servicios'},
            { name:'Productos'},
            { name:'Testimonios'},
            { name:'Contacto'},

        ]
    }

    toggleMEnu(e){
        this.shadowRoot.querySelector('.links').classList.toggle('-translate-x-[120%]')
    }

    scrollThis(e) {
        e.preventDefault()
        const innerText = e.target.innerText;
        this.dispatchEvent(new CustomEvent('scroll-this', { detail: innerText, bubbles:true, composed:true}))
        this.toggleMEnu()
    }

    render() {
        return html`
            <nav class="text-pink-700 bg-black rounded-lg fixed top-0 w-11/12 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center p-2 px-5">
                <ul class="flex items-center">
                    <img class="mx-3 border h-10 w-10 p-2 rounded-full" src="src/images/logo.png" />
                    <li class="md:text-white font-bold rounded-xl">${this.brandName}</li>
                </ul>
                <ul class="links absolute top-full left-0    w-full rounded-lg text-center -translate-x-[120%] transition
                sm:relative sm:-translate-x-0 sm:flex-row sm:flex sm:justify-end sm:w-max 
                ">
                    ${this.links.map(link => html`<li @click="${this.scrollThis}" class="p-2 text-white font-bold sm:bg-transparent bg-slate-800/60 hover:bg-pink-500 hover:text-white my-1 sm:my-0 rounded-lg cursor-pointer transition
                    ">${link.name}</li>`)}
                </ul>

                <button @click=${this.toggleMEnu} class="md:text-white rounded-lg border p-2 
                sm:hidden
                ">menu</button>
            </nav>
        `;
    }
}
customElements.define('nav-element', NavELement);
