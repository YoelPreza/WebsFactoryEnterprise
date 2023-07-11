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
        <div class=" bg-[#4db8e1] min-h-screen relative py-10 flex items-center justify-center " >
            <div class="absolute left-10 md:left-1/2 translate-y-1/2 z-50">
                <button @click=${this.leftScroll} class="  bg-blue-300 rounded-l-lg w-8 h-8">&#10094;</button>
                <button @click=${this.rightScroll} class="   bg-blue-300 rounded-r-lg w-8 h-8 ">&#10095;</button>
            </div>

                        <div class="screen relative m-2 w-full min-h-[650px] sm:h-96 max-w-3xl md:items-center scroll-smooth flex overflow-y-hidden overflow-x-hidden
            sm:overflow-x-hidden
            ">


                    ${testimonios.map((testimonio,index) => html`

                    <div class="testimonio min-w-full h-[650px] md:h-96 md:items-center scroll-smooth bg-white flex flex-col rounded-lg overflow-hidden  
                    relative
                    md:flex-row
                    lg:w-[760px]
                    xl:h-96"> 
                         
                        <div class="texto h-1/2 xl:w-1/2 flex justify-center items-start text-left  flex-col
                        sm:w-auto 
                        md:w-1/2 md:h-96
                        "> 
                             <p class="text-xl text-left z-10 w-11/12 mx-auto font-serif p-5">${testimonio.mensaje}</p> 
                             <p class="translate-x-10 mt-5 font-bold">${testimonio.name}</p> 
                             <p class="translate-x-10">${testimonio.pagina}</p>   
                             <span class="translate-x-10 text-2xl mt-5">${testimonio.rate}</span>
                        </div>
    
                        <div class="h-1/2 flex items-center justify-center
                        sm:w-auto 
                        md:w-1/2 md:h-96">
                            <div class="h-full">
                                <img class="w-auto h-full" src=${testimonio.avatar} alt="avatar"/>
                            </div>
                        </div>

                    </div>
                    
                    `
                    )}

                

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
