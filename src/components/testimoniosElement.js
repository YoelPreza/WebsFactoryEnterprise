import { LitElement, html, css } from 'lit';
import { testimonios } from '../data/testimonios';
import { TWStyles } from '../twlit'


export class TestimoniosELement extends LitElement {
    static styles = [TWStyles,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <div class=" bg-blue-300 h-screen flex items-center justify-center" >
            <div class="screen scroll-smooth h-96  w-[760px] flex flex-nowrap overflow-x-hidden"  >
                <div class="w-[2280px] flex justify-center scroll-smooth"> 

                    ${testimonios.map((testimonio,index) => html`
                     <div class="testimonio scroll-smooth bg-white flex w-[760px] h-full rounded-lg overflow-hidden"> 
                         <div class="texto w-1/2 flex justify-center items-start text-left  flex-col"> 
                             <p class="text-xl text-left translate-x-10 z-10 font-serif">${testimonio.mensaje}</p> 
                             <p class="translate-x-10 mt-5 font-bold">${testimonio.name}</p> 
                             <p class="translate-x-10">${testimonio.pagina}</p>   
                             <span class="translate-x-10 text-2xl mt-5">${testimonio.rate}</span>
                         </div>
    
                         <div class="h-full w-1/2 flex items-center justify-center  relative">
                            <img class="h-full w-full" src=${testimonio.avatar} alt="avatar"/>
                            <button @click=${this.leftScroll} class="absolute bottom-0 left-0 bg-blue-300 rounded-l-lg w-8 h-8">&#10094;</button>
                            <button @click=${this.rightScroll} class="absolute bottom-0 left-5  bg-blue-300 rounded-r-lg w-8 h-8 ">&#10095;</button>
                         </div>
                     </div>`
                    )}

                </div>
            </div>
        </div>
        `;
    }

    rightScroll() {
     this.shadowRoot.querySelector('.screen').scrollLeft += 760;
    }

    leftScroll() {
        const screen = this.shadowRoot.querySelector(".screen");
        const scrollAmount = 760; 
        screen.scrollLeft -= scrollAmount;
    }
}
customElements.define('testimonios-element', TestimoniosELement);
