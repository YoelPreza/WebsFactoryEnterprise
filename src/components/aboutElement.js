import { LitElement, html, css } from 'lit';
import {TWStyles} from '../twlit'
export class AboutELement extends LitElement {
    static styles = [TWStyles,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <main class="w-full  min-h-screen bg-[#e97950]">
                <div class="flex flex-col md:flex-row items-center h-screen">
                    <div class="md:w-1/2 bg-white flex items-center h-full">
                        <img class="  h-4/6 w-full md:w-full mx-auto" src="src/images/about.gif" />
                    </div>
                    <p class="text-white text-center text-4xl w-full md:w-1/2 p-10"><span class="text-4xl ">

                    </span> Somos una empresa dedicada a ofrecer soluciones tecnológicas a bajo costo sin dejar de lado lo más importante.<br> ¡LA CALIDAD!</p>
                </div>
                <div class="flex items-center min-h-screen w-full flex-col-reverse md:flex-row bg-[#F5F5F5]">
                    <div class="
                        relative  h-screen flex-col 
                        md:w-1/2
                        py-5
                        m-5
                        
                    ">
                        <img class="h-[250px] rounded-full mx-auto md:absolute left-0 top-0"  src="src/images/rapido.png" />
                        <img class="h-48 rounded-full mx-auto absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2" src="src/images/facil.png" />
                        <img class="h-[250px] rounded-full mx-auto absolute right-0 bottom-0" src="src/images/economico.png" />
                    </div>
                    <div class="w-1/2 px-10 text-center ">
                        <p class="text-slate-800 text-center   font-mono text-4xl mx-auto   md:w-full"> Somos un grupo de desarrolladores Web con experiencia en marketing y diseño gráfico, preocupados por brindar la mejor experiencia en el mundo digital, con mas de 5 años en el mercado. <br> Si eres un emprendedor estas en el lugar adecuado</p><br>
                    </div>
                </div>
            </main>
        `;
    }
}
customElements.define('nosotros-element', AboutELement);
