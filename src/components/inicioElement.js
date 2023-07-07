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
<main class="flex flex-col 
sm:flex-row
md:flex-row ">

    <div
        class=" pt-20 px-10 w-full h-1/2 bg-[#9ec59f] flex flex-col justify-center items-center
        sm:w-1/2 sm:h-screen 
        lg:w-1/2 lg:h-screen
        ">
        <h1 class=" text-white m-0 text-3xl  text-center font-bold font-sans">
            ¡ Destaca entre la competencia !
        </h1>

        <p class="text-black text-2xl text-center lg:w-1/2 md:w-full w-11/12 my-5">
            No dejes que tu negocio se quede atrás en el mundo digital
        </p>
        <p class="text-black text-2xl text-center lg:w-1/2 md:w-full w-11/12 mb-10">
            Creamos páginas web modernas rápidas y fáciles de usar
        </p>
        <button href="#" class=" hidden bg-black p-4 rounded-full text-white capitalize font-bold">explorar</button>
    </div>

    <div class="w-full h-1/2 py-5 flex bg-[#9ec59f] justify-center items-center
     sm:w-1/2 sm:h-screen 
    lg:w-1/2 lg:h-screen lg:py-0
    ">
        <img class=" h-full w-screen
        sm:w-auto sm:h-auto
        lg:h-full

        " src="./src/images/banner-hero.gif" />
    </div>

</main>
`;
}
}
customElements.define('inicio-element', InicioELement);