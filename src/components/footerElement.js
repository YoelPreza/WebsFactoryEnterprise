import { LitElement, html, css } from 'lit';
import { TWStyles } from '../twlit';

export class FooterELement extends LitElement {
    static styles = [ TWStyles,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <footer class="bg-[#bfa588] sm:h-max text-black text-xl relative bottom-0 py-3 flex flex-col md:flex-row">
                
                <div class="main-networks flex flex-col 
                    md:justify-between  items-center md:items-center md:w-1/2 md:flex-col
                    ">
                    <div class="flex items-center  md:w-full p-2 justify-center">
                        <img class="h-10 mx-3 hover:animate-bounce cursor-pointer" src="src/assets/envelope-solid.svg" />
                        <p class="mx-3">thewebsfactory@website.com</p>
                    </div>
                    <div class="flex justify-center items-center w-max md:w-full md:justify-self-start lg:flex-row ">
                        <img class="h-10 mx-3 hover:animate-bounce cursor-pointer" src="src/assets/whatsapp.svg" />
                        <div class="flex">
                            <p class="mx-3">5532900759</p>
                            <p class="mx-3">5532900759</p>
                        </div>
                    </div>
                </div>

                <div class="secundary-networks w-full bg-[#bfa588] flex flex-row p-5 items-center justify-center md:w-1/2 ">
                    <img class="h-10 mx-5 hover:animate-bounce cursor-pointer" src="src/assets/facebook.svg" />
                    <img class="h-10 mx-5 hover:animate-bounce cursor-pointer" src="src/assets/instagram.svg" />
                    <img class="h-10 mx-5 hover:animate-bounce cursor-pointer" src="src/assets/tiktok.svg" />
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-element', FooterELement);
