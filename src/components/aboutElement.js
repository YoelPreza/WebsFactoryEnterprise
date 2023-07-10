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
        <div class="md:w-1/2 bg-white flex items-center h-full ">
            <img class="  h-auto w-auto  mx-auto
                        md:h-auto md:w-full
                        " src="src/images/about.gif" />
        </div>
        <p class="text-white text-center text-3xl w-full  p-5
        md:w-1/2
        lg:text-4xl lg:p-20 ">
             Somos una empresa dedicada a ofrecer soluciones tecnológicas a bajo costo sin dejar de lado lo más
            importante.<br>
            <span class="text-white text-center font-bold text-3xl w-full md:w-1/2 py-10
             lg:text-5xl lg:font-bold">¡LA CALIDAD!</span>
        </p>
    </div>


    <div class="
    flex items-center min-h-screen w-full h-screen  flex-col
    md:flex-row bg-[#F5F5F5]
    lg:flex lg:flex-row-reverse lg:w-full lg:items-center lg:justify-center ">
        <div class="
                     h-1/3 w-full flex flex-row justify-center items-end p-10
                        md:w-1/2 md:h-screen md:relative 
                        lg:w-1/2 lg:h-[600px] lg:relative
                        
                    ">
            <img class="h-[100px] rounded-full mx-5
            
            md:h-[150px] md:left-0 md:top-0  md:absolute md:my-20 
            lg:h-[180px] lg:left-0 lg:top-0  lg:absolute  " 
            src="src/images/rapido.png" />

            <img class="h-[100px] rounded-full  
            md:h-[180px] md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:top-1/2 md:mx-auto md:absolute
            lg:h-[180px] lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:mx-auto lg:absolute
            "
                src="src/images/facil.png" />
            <img class="h-[100px] rounded-full  mx-5
            md:h-[180px] md:right-0 md:bottom-0  md:absolute md:my-20 
            lg:h-[180px] lg:right-0 lg:bottom-0  lg:absolute
            " src="src/images/economico.png" />
        </div>

        <div class="w-full text-center flex justify-center h-2/3 items-start 
        md:w-1/2
         lg:w-1/2 lg:h-[600px] lg:flex lg:items-center">
            <p class="text-slate-800 text-center  text-2xl  w-full  px-10 
            
             "
            >   Somos un grupo de desarrolladores Web con experiencia en 
            marketing y diseño gráfico, preocupados por brindar la mejor
            experiencia en el mundo digital, con mas de 5 años en el mercado. 
            <br> Si eres un emprendedor estas en el lugar adecuado
        </p>
        </div>
    </div>
</main>
`;
}
}
customElements.define('nosotros-element', AboutELement);