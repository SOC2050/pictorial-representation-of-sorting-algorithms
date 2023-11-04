let arrowCount = 0;




//function for indicating specific Box with the help of Arrow

function Arrow(index, idNumber, massage = null, countRadix = null) {

    const ele = arr[index];

    index = Math.abs(index - arrowCount);

    let margin = 0;
    if (arrowCount >= 1) {
        margin = 5;
    }
    const awidth = userWidth;
    //creating div for  Arrow surface in which Arrow and text will be displayed



    //accessing parent through id

    const parent = document.getElementById('arrow-surface' + idNumber);
    //  console.log("arrow"+idNumber );


    let arrow_surface = document.createElement('div');
    arrow_surface.classList.add('arrow-Surface');
    arrow_surface.id = 'arrow';
    arrow_surface.style.width = userWidth + 'px';
    arrow_surface.style.left = (Left[index]+margin ) + 'px';

    //   arrow_surface.style.top =Bottom[index]+'px';


    //creating div for displaying text on the top of Arrow

    let text = document.createElement('div');
    text.classList.add('a-text');
    if (massage !== null) {

        if (countRadix !== null) {
            text.innerHTML = massage + countRadix;
        } else {


            text.innerHTML = massage + ele;
        }
    } else {


        text.innerHTML = ele;
    }

    //creating div for placing svg tag

    let arrow = document.createElement('div');
    arrow.classList.add('arrow');

    /* Creating SVG for graphically drawing arrow */

    // creating graphics using different name space


    const svgNS = 'http://www.w3.org/2000/svg'; // this website is used for svg name space
    const svgElement = document.createElementNS(svgNS, 'svg');
    svgElement.classList.add('arrow', 'a');


    //sitting svg graphics window height
    const svgHeight = vhToPixels(arrowHeight);

    svgElement.setAttribute('height', svgHeight + 'px');


    const svgHeightFactor = svgHeight * 0.50;
    const halfWidth = awidth * 0.5;
    const awid40 = awidth * 0.40;

    const vertices = `${halfWidth} ${svgHeight-1} , ${awidth} ${svgHeightFactor},${awidth-awid40} ${svgHeightFactor} , ${awidth-awid40} 1, ${awid40}  1 , ${awid40} ${svgHeightFactor}  , 0 ${svgHeightFactor} `;

    const polygonElement = document.createElementNS(svgNS, 'polygon');
    polygonElement.setAttribute('points', vertices);
    polygonElement.classList.add('polygon');
    //   polygonElement.setAttribute('style', 'fill:lime;stroke:purple;stroke-width:1');

    //adding polygon to svg tag

    svgElement.appendChild(polygonElement);

    arrow.appendChild(svgElement);
    arrow_surface.appendChild(text);
    arrow_surface.appendChild(arrow);

    parent.appendChild(arrow_surface);

    arrowCount++;
}