import { LitElement, html, css } from 'lit';
import {TWStyles} from '../twlit'

export class InicioELement extends LitElement {
    static styles = [ TWStyles,
        css`
            :host {
                display: block;
            }

            

              
              
        `
    ];

    render() {
        return html`
        <main  class="flex flex-col md:flex-row">

        <div class="lg:w-1/2 p-10 w-full h-screen bg-[#9ec59f] flex flex-col justify-center items-center">
          <div class="typewriter">
          <h1 class=" text-white m-0 text-5xl text-center font-bold font-sans">
          ¡ Destaca entre la competencia !
          </h1>
          </div>
          
          <p class="text-black text-3xl text-center lg:w-1/2 md:w-full w-11/12 my-10">
          No dejes que tu negocio se quede atrás en el mundo digital 
          </p>
          <p class="text-black text-3xl text-center lg:w-1/2 md:w-full w-11/12 mb-10">
          Creamos páginas web modernas rápidas y fáciles de usar
          </p>
          <button href="#" class="bg-black p-4 rounded-full text-white capitalize font-bold">explorar</button>
        </div>

        <div class="lg:w-1/2 w-full h-screen flex bg-[#9ec59f] justify-center items-center">
            <img class="rounded-xl " src="./src/images/banner-hero.gif" />
        </div>

      </main>
        `;
    }
}
customElements.define('inicio-element', InicioELement);
