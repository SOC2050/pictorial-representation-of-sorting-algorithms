// Global variables

let userHeight = 0; // this variable for setting the height of boxes in array
let userWidth = 0; // this variable for setting the width of boxes in array
let comparatorHeight = 0; // this variable for setting the height of comparator arrows which show below array

const arrowHeight = 6; // this variable for setting the height of Arrow which indicate array boxes


const arr = []; // normal array for accepting user array

let Left = []; // array for storing the left coordinates of boxes in array
const Right = []; // array for storing the right  coordinates of boxes in array
const Top = []; // array for storing the top coordinates of boxes in array
const Bottom = []; // array for storing the bottom coordinates of boxes in array


//the below PassSarfaces must be in given container ID which would bring from HTML page
const PassSurfaces = []; // array for storing all pass surfaces created in any sort (here pass means pass in sorts which represent passes )

//the below MainSurfaces must be in PassSurfaces 
const MainSurfaces = []; // array for storing all main surfaces created  in any sort ( here main means single station among  total number of iterations to complete sort)

// the below all surfaces that is ArrowSurfaces ArraySurfaces and CompSurfaces must be in MainSurfaces
const ArrowSurfaces = []; // array for storing all Arrow surfaces in which arrow would be drawn in any sort about array surfaces
const ArraySurfaces = []; // array for storing all array surfaces in which array would be drawn in any sort in between arrow and comparator surfaces
const CompSurfaces = []; // are for storing all comparator surfaces in which comparator  would be drawn below the array surfaces


// the below to two variable represents display or viewport total height and width
const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;


// setting box heights and widths according to current display and comparator height

function pxToVw(px, viewportWidth) {
  return (px / viewportWidth) * 100;
}

function pxToVh(px, viewportHeight) {
  return (px / viewportHeight) * 100;
}


function vwToPx(vw) {
  const viewportWidth = window.innerWidth;
  return (vw * viewportWidth) / 100;
}



 



if (viewportHeight <= 708 &&
    viewportWidth <= 360) {


    userHeight = 50;
    userWidth = 40;
    comparatorHeight = 5;

} else {
    userHeight = 140;
    userWidth = 110;
    comparatorHeight = 6;
}




function setting(array){

 let len = array.length ;

 let wid = vwToPx(90) / len ;

 console.log("actually vw"+viewportWidth );
 console.log("actually width"+wid);




}



// Function to create an array


function createArray(arr, idNumber, pass, indexapp = null, sort = null, massage = null) {

setting (arr);
    const main = createSurface('main-surface' + idNumber, 'main-surface', 'lightblue', defaultClass = 'b');
    MainSurfaces.push('main-surface' + idNumber);
    num = parseInt(idNumber);
    let jj = num % 10;
    let ii = Math.floor(num / 10);


    const passnum = document.createElement('div');
    passnum.classList.add('dec');
    if (massage !== null) {
        passnum.innerHTML = massage;
    } else {

        passnum.innerHTML = `i : ${ii}  ,  j : ${jj}`;
    }
    main.appendChild(passnum);
    main.style.color = 'white';

    const arrow_surface = createSurface('arrow-surface' + idNumber, 'arrow-surface', 'lightblue');
    const array_surface = createSurface('array-surface' + idNumber, 'array-surface', 'lightblue');
    const comp_surface = createSurface('comp-surface' + idNumber, 'comp-surface', 'lightblue');


    ArrowSurfaces.push('arrow-surface' + idNumber);
    ArraySurfaces.push('array-surface' + idNumber);
    CompSurfaces.push('comp-surface' + idNumber);



    main.appendChild(arrow_surface);
    main.appendChild(array_surface);
    main.appendChild(comp_surface);
    pass.appendChild(main);
    parent.appendChild(pass);
    //    parent.appendChild(parent);

    for (let i = 0; i < arr.length; i++) {

        const b = createBox(i, arr[i], userHeight, userWidth, indexapp !== null ? indexxx = (i >= arr.length - 1) ? 1 : null : null);
        array_surface.appendChild(b);

    }

    const parentRect = array_surface.getBoundingClientRect();
    for (let j = 0; j < arr.length; j++) {
        const childsRect = document.getElementById('box' + j).getBoundingClientRect();
        Top[j] = Math.abs(parentRect.top - childsRect.top);
        Right[j] = Math.abs(parentRect.left - childsRect.right);
        Left[j] = Math.abs(parentRect.left - childsRect.left);
        Bottom[j] = Math.abs(parentRect.bottom - childsRect.bottom);
    }




    // this below code specially for count sort and redix sort
    if (sort == "count") {

        //comp_surface.innerHTML= '<div class="dec">Increase Count[${arr[i]}] to 1 (i.e Count[${arr[i]}]++ ) </div>';

        return comp_surface;

    }
}


// Function to create a surface element

function createSurface(id, styleClass, col, defaultClass = 'surface') {

    const surface = document.createElement('div');
    surface.classList.add(`${styleClass}`, defaultClass);
    surface.id = `${id}`;
    surface.style.backgroundColor = col;
    return surface;
}

// Function to create a single box

function createBox(ind, ele, height, width, indexxx = null) {

    const box = document.createElement('div');
    box.classList.add('box');
    box.id = 'box' + ind;
    box.style.height = height + 'px';
    box.style.width = width + 'px';

    const index = createBoxElement('index', 'box-index', ind.toString(), indexx = indexxx);
    const containt = createBoxElement('b-contain', 'box-value', ele.toString());

    box.appendChild(index);
    box.appendChild(containt);

    return box;
}

// Function to create an element for a box

function createBoxElement(className, textClass, textContent, indexx = null) {

    const element = document.createElement('div');
    element.classList.add(className, textClass);
    if (indexx !== null) {

        element.innerHTML = ' ';
    } else {
        element.innerHTML = textContent;
    }
    return element;
}



// this function for delete all on the display

function removeDisplay() {

    for (let j = 0; j < ArrowSurfaces.length; j++) {

        /*  document.getElementById(ArrowSurfaces[j]).remove();
        document.getElementById(ArraySurfaces[j]).remove();
        document.getElementById(CompSurfaces[j]).remove();
        document.getElementById(MainSurfaces[j]).remove();
*/

        let el1 = document.getElementById(ArrowSurfaces[j]);
        let el2 = document.getElementById(ArraySurfaces[j]);
        let el3 = document.getElementById(CompSurfaces[j]);
        let el4 = document.getElementById(MainSurfaces[j]);


        if (el1 !== null) {
            el1.remove();
        }
        if (el2 !== null) {
            el2.remove();
        }

        if (el3 !== null) {
            el3.remove();
        }

        if (el4 !== null) {
            el4.remove();
        }


    }

    for (let k = 0; k < PassSurfaces.length; k++) {

        let pas = document.getElementById(PassSurfaces[k]);

        if (pas !== null) {
            pas.remove();
        }
    }

}


// this function for generate random array
function generateRandomArray(range = 100  ,l=6 , h=7) {
    // Generate a random decimal between 0 and 1, then multiply by 100 to get a range from 0 to 99.
    for (let j = 0; j < getRandomNumber(l, h); j++) {
        arr[j] = Math.floor(Math.random() * range);
    }

}


// this function for generate random number between range

function getRandomNumber(min, max) {
    // Generate a random decimal between 0 and 1, then scale and shift it to the desired range.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





console.log('Viewport height:', viewportHeight);
console.log('Viewport width:', viewportWidth);