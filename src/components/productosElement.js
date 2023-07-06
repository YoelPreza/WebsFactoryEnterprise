import { LitElement, html, css } from 'lit';
import {TWStyles} from '../twlit'
import { products } from '../data/productos';


export class ProductosELement extends LitElement {
    static styles = [ TWStyles,
        css`
            :host {
                display: block;
            }
        `
        ]

    static get properties() {
        return {
            products: { type: Array, reflect:true},
        };
    }

    constructor(){
        super();
    }

    render() {
        return html`
        <div class="bg-pink-200   min-h-screen flex flex-wrap   justify-center">
        ${products.map(prod=>html`
            <div class="${prod.bg} text-white flex flex-col items-center max-w-[400px] mx-auto my-3 min-h-[400px] text-left px-20 py-10 text-pink rounded-xl">
                <img class="w-20" src=${prod.img} alt="imagen de bronce"/> 
                <h2 class="text-2xl font-bold my-6">${prod.name}</h2>
                <ul class=" text-xs h-max">${prod.description.map(des=>html`
                    <li class="list-disc list-item text-sm ">${des}</li>`)}
                </ul> 
                <p class=" text-4xl text-center font-bold my-6 ">${prod.price} </p> 
                <button class=" ${prod.tx} p-5 w-52 text-sm font-bold bg-yellow-200 rounded-full">Details</button>
            </div>` )}
        
        <div>
        `;
    }
}
customElements.define('productos-element', ProductosELement);
