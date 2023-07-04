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

        <div class="lg:w-1/2 p-10 w-full h-screen bg-green-700 flex flex-col justify-center items-center">
          <div class="typewriter">
          <h1 class="anim-typewriter text-pink-200 m-0 text-5xl text-center font-bold font-sans">
          ¡ Destaca entre la
          
          competencia !
          </h1>
          </div>
          
          <p class="text-pink-300 text-3xl text-center lg:w-1/2 md:w-full w-11/12 my-10">
          No dejes que tu negocio se quede atrás en el mundo digital 
          </p>
          <p class="text-pink-300 text-3xl text-center lg:w-1/2 md:w-full w-11/12 mb-10">
          Creamos páginas web modernas rápidas y fáciles de usar
          </p>
          <a href="#" class="bg-yellow-200 p-4 rounded-full text-pink-700 capitalize font-bold">explorar</a>
        </div>

        <div class="lg:w-1/2 w-full h-screen flex bg-[#B6A9FF] justify-center items-center">
            <img src="./src/images/banner-hero.gif" />
        </div>

      </main>
        `;
    }
}
customElements.define('inicio-element', InicioELement);
