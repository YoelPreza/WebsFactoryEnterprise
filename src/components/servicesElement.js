import { LitElement, html, css } from 'lit';
import {TWStyles} from '../twlit'
import { servicios } from '../data/servicios';

export class ServicesELement extends LitElement {
static styles = [TWStyles,
css`
:host {
display: block;
}
`
];

render() {
return html`

<main class="flex flex-col  items-center justify-center bg-[#9ec59f] min-h-screen

lg:flex-row
">
  ${servicios.map(servicio=>html`
  <div class="grid grid-cols-1 p-10 place-items-center text-center text-slate-800 text-xl font-semibold
   md:w-[500px]
   lg:w-[500px] lg:h-[500px] lg:p-0" >
    <div class="flex flex-col items-center my-10">
      <img class="mx-auto w-52" src=${servicio.img} alt="icon">
      <h3 class="text-white text-3xl py-2">${servicio.name}</h3>
      <p class="w-3/4">${servicio.descripcion}</p>
    </div>
  </div>
`)}

</main>

`;
}
}
customElements.define('servicios-element', ServicesELement);