
class CircleGraphic extends HTMLElement{

    colorGraphic = 'yellow';
    value = '75';
    
    constructor(){
        super();
    }

    connectedCallback(){
        this.getProps()
        this.style()
        this.render()
    }

    getProps( ){
        this.colorGraphic = this.attributes.color.value;
        this.value = this.attributes.value.value;
    }
    style(){
        this.innerHTML = `
        <style>
            @keyframes complete {
                to{
                    stroke-dasharray: ${this.value} 100;
                }
            }

            .containerGraphic{
                position: relative;
                width: 150px;
                height: 150px;
            }
            .svgGraphic{
                width: 150px;
                height: 150px;
            }
            circle{
                fill: none;
                stroke: rgba(0,0,0,.3);
                stroke-width: 20;
                stroke-dasharray: 100 100;
            }
            circle:nth-child(2){
                fill: none;
                stroke: ${ this.colorGraphic } ;
                stroke-width: 20;
                stroke-dasharray: 0 100;
                transform: rotate(-90deg);
                transform-origin: 50%;
                animation: complete .7s linear forwards;
            }
            span{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font: 25px/1em Verdana;
                color: ${this.colorGraphic};
            }
        </style>
        `
    }
    render(){
        this.innerHTML += `
        <div class='containerGraphic'>
            <svg class='svgGraphic'>
                <circle r='60' cy='50%' cx='50%' pathLength='100'/>
                <circle r='60' cy='50%' cx='50%' pathLength='100'/>
            </svg>
            <span>${this.value}%</span>
        </div>
        `
    }
}

customElements.define('circle-graphic', CircleGraphic);