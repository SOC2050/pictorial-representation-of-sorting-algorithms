function comparator(i, j, idNumber, massage = null, swap = null) {

    let cHeight = userHeight,
        cwidth = userWidth;
    //accessing parent element 2 insert all element

    let parent = document.getElementById('comp-surface' + idNumber);

    // calculating the size of comparator surface according to the distance between two boxes

    let comp_surface_size = Math.abs(Left[i] - Right[j]);
    //surface where comparator will be drawn

    let comparator_surface = document.createElement('div');

    //adding comparator surface to one class
    comparator_surface.classList.add('comparator-surface');

    //sitting with of comparative surface dynamically according to boxes
    comparator_surface.style.width = comp_surface_size + 'px';

    //setting the lift position or coordinate of comparator surface according to boxes dynamically
    comparator_surface.style.left = Left[i] + 'px';
    //  comparator_surface.style.top = Bottom[i]+'px';
    // actual comparator

    let comparator = document.createElement('div');

    comparator.classList.add('comparator');
    comparator.id = 'draw';


    // creating graphics using different name space


    const svgNS = 'http://www.w3.org/2000/svg'; // this website is used for svg name space
    const svgElement = document.createElementNS(svgNS, 'svg');
    svgElement.classList.add('comparator', 'a');


    //sitting svg graphics window height
    const svgHeight = vhToPixels(comparatorHeight);
    svgElement.setAttribute('height', svgHeight + 'px');


    //important variable to create scalable or shring cable comparator arrow according to the size

    const halfWidth = cwidth * 0.5;
    const cwid40 = cwidth * 0.40;
    const baseLen = comp_surface_size - cwidth * 0.80;
    const base_big_offset = baseLen * 0.45;
    const base_small_offset = baseLen * 0.10;
    const svgHeightFactor = svgHeight * 0.50;

    //formatting vertices according to the distance between two boxes in array

    const vertices = `${halfWidth} 1, 1 ${svgHeightFactor}, ${cwid40} ${svgHeightFactor}, ${cwid40} ${svgHeight * 0.92}, ${cwid40+base_big_offset} ${svgHeight * 0.92}, ${cwid40+base_big_offset} ${svgHeight}, ${cwid40+base_big_offset + base_small_offset} ${svgHeight}, ${cwid40+base_big_offset + base_small_offset} ${svgHeight * 0.92}, ${cwid40+baseLen} ${svgHeight * 0.92}, ${cwid40+baseLen} ${svgHeightFactor}, ${comp_surface_size} ${svgHeightFactor}, ${comp_surface_size - cwidth * 0.50} 1, ${comp_surface_size - cwidth} ${svgHeightFactor}, ${comp_surface_size - cwidth + (cwidth * 0.40)} ${svgHeightFactor}, ${comp_surface_size - cwidth + (cwidth * 0.40)} ${svgHeight * 0.75}, ${cwidth * 0.60} ${svgHeight * 0.75}, ${cwidth * 0.60} ${svgHeightFactor}, ${cwidth} ${svgHeightFactor}`;



    //creating polygon with the help of above vertices and with the help of name space

    const polygonElement = document.createElementNS(svgNS, 'polygon');
    polygonElement.classList.add('polygon');
    polygonElement.setAttribute('points', vertices);

    // polygonElement.setAttribute('style', 'fill:lime;stroke:purple;stroke-width:1');

    //adding polygon to svg tag

    svgElement.appendChild(polygonElement);

    // Add the SVG element to the document

    comparator.appendChild(svgElement);


    //creating due for inserting text greater than or equal to or lesser than or equal to into that box


    let text = document.createElement('div');
    text.classList.add('c-text');


  displaySortMessage(text, massage , swap , arr, i, j) ;






    // inserting element in another element

    comparator_surface.appendChild(comparator);
    comparator_surface.appendChild(text);

    parent.appendChild(comparator_surface);



}

function vhToPixels(vh) {
    const windowHeight = window.innerHeight;
    return (vh * windowHeight) / 100;
}




function displaySortMessage(text, sortType, swapType, arr, i, j) {


    switch (sortType) {
        case 'bubbleSort':
            text.innerHTML = (arr[i] > arr[j]) ?
                `${arr[i]} is Greater Than ${arr[j]}<br> Swap ${arr[i]} With ${arr[j]}` :
                `${arr[i]} is Lesser Than ${arr[j]}<br> Don't Swap ${arr[i]} With ${arr[j]}`;
            break;

        case 'selectionSort':
            if (swapType === 'switchmin') {
                text.innerHTML = `${arr[j]} is Lesser Than ${arr[i]}<br> Switch min to ${j} index`;
            } else if (swapType === 'next') {
                text.innerHTML = `${arr[j]} is Greater Than ${arr[i]}<br> Search next min than ${arr[i]}`;
            } else {
                text.innerHTML = `Swap ${arr[i]} with ${arr[j]}<br> Old min with New min`;
            }
            break;

        case 'insertionSort':
            text.innerHTML = (swapType === 'shift') ?
                `Shift ${arr[i]} to ${i + 1}<br> index` :
                `Place key ${arr[j]} at ${i}<br> Place`;
            break;

        case 'quicksort':
            if (swapType === 'positive' || swapType === 'negative') {
                text.innerHTML = `${arr[i]} is Greater than ${arr[j]}<br> Increment start( start++ )`;
            } else if (swapType === 'startend') {
                text.innerHTML = `Swap ${arr[i]} with ${arr[j]}<br> Start With End`;
            } else {
                text.innerHTML = `Swap ${arr[i]} with ${arr[j]}<br> Pivot With End`;
            }
            break;

        case 'shellsort':

            //in this sort  type gap is coming from shellSort.js file
            if (swapType === 'jtoj_gap') {
                text.innerHTML = `${arr[i]} is Greater than ${arr[j]}(temp)<br> Place ${arr[i]} To ${i + gap}`;
            } else if (swapType === 'placing') {
                text.innerHTML = `${arr[i]} Placing to ${j}<br> Position`;
            } else if (swapType === 'not') {
                text.innerHTML = `${arr[i]} is Lesser than ${arr[j]}(temp)<br> Find next Max than temp`;
            } else if (swapType === 'jtotemp') {
                text.innerHTML = `Place ${arr[j]} At ${i}th index<br> Place temp to correct position`;
            }
            break;

        default:
            text.innerHTML = 'Invalid sort type.';
            break;
    }
}