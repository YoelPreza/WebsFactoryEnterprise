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
        <div class=" bg-[#4db8e1] min-h-screen  py-10 flex items-center justify-center" >
            <div class="screen  border-red-400 xl:h-96 w-[365px] xl:w-[760px] xl:flex-row xl:flex-nowrap scroll-smooth flex overflow-y-hidden sm:overflow-x-hidden overflow-x-hidden
                         ">

                <div class="w-[1,095px] xl:w-[2280px] flex flex-row justify-center scroll-smooth"> 

                    ${testimonios.map((testimonio,index) => html`

                     <div class="testimonio scroll-smooth bg-white flex flex-col rounded-lg overflow-hidden  

                     xl:flex-row xl:h-96 w-[365px] xl:w-[760px] "> 
                         
                        <div class="texto xl:w-1/2 sm:w-auto flex justify-center items-start text-left  flex-col"> 
                             <p class="text-xl text-left z-10 w-11/12 mx-auto font-serif p-5">${testimonio.mensaje}</p> 
                             <p class="translate-x-10 mt-5 font-bold">${testimonio.name}</p> 
                             <p class="translate-x-10">${testimonio.pagina}</p>   
                             <span class="translate-x-10 text-2xl mt-5">${testimonio.rate}</span>
                         </div>
    
                         <div class="h-full sm:w-auto flex items-center justify-center  relative">
                            <img class="h-full w-full" src=${testimonio.avatar} alt="avatar"/>
                            <button @click=${this.leftScroll} class="absolute bottom-2  right-10 bg-blue-300 rounded-l-lg w-8 h-8">&#10094;</button>
                            <button @click=${this.rightScroll} class="absolute bottom-2  right-1  bg-blue-300 rounded-r-lg w-8 h-8 ">&#10095;</button>
                         </div>
                     </div>`
                    )}

                </div>

            </div>
        </div>
        `;
    }

    rightScroll() {
     this.shadowRoot.querySelector('.screen').scrollLeft += this.shadowRoot.querySelector('.screen').scrollWidth/3;
    }

    leftScroll() {
        this.shadowRoot.querySelector('.screen').scrollLeft -= this.shadowRoot.querySelector('.screen').scrollWidth/3;
    }
}
customElements.define('testimonios-element', TestimoniosELement);
