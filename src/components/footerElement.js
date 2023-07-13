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
                        <img class="h-10 mx-3 hover:animate-bounce cursor-pointer" src="assets/envelope-solid.svg" />
                        <p class="mx-3">thewebsfactory@gmail.com</p>
                    </div>
                    <div class="flex justify-center items-center w-max md:w-full md:justify-self-start lg:flex-row ">
                        <img class="h-10 mx-3 hover:animate-bounce cursor-pointer" src="assets/whatsapp.svg" />
                        <div class="flex">
                            <a target="_blank" href="https://wa.me/5532900759?text=Quiero%20despegar%20mi%20negocio%20en%20la%20Web!">
                                <p class="mx-3">5532900759</p>
                            </a>
                            <a target="_blank" href="https://wa.me/5540561429?text=Quiero%20despegar%20mi%20negocio%20en%20la%20Web!">
                                <p class="mx-3">5540561429</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="secundary-networks w-full bg-[#bfa588] flex flex-row p-5 items-center justify-center md:w-1/2 ">
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=100094365984365">
                      <img  class="h-10 mx-5 hover:animate-bounce cursor-pointer" src="assets/facebook.svg" /> 
                  </a> 
                    <!-- <img class="h-10 mx-5 hover:animate-bounce cursor-pointer" src="assets/instagram.svg" />
                    <img class="h-10 mx-5 hover:animate-bounce cursor-pointer" src="assets/tiktok.svg" /> -->
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-element', FooterELement);
