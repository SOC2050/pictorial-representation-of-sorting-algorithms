
function bubbleSort(arr) {

    const len = arr.length;

    for (let i = 0; i < len; i++) {

        let idNumber = '' + i;
        let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
        pass.innerHTML = '<pp class="dec">Pass ' + (i + 1) + '</p>';
        PassSurfaces.push('pass' + idNumber);

        for (let j = 0; j < len - 1; j++) {

 //creating ideas for every surface code passes
            idNumber = '' + i + j;
            console.log("id" + idNumber);

//creating array and displaying in array surface
            createArray(arr, idNumber, pass);
//creating Arrow and indicating the j th  element in array
            Arrow(j, idNumber);
//creating Arrow and indicating the j+1 element in array
            Arrow(j + 1, idNumber);

//setting arrowCount to 0
            arrowCount = 0;

//making comparison between j and j + 1 element in given array and displaying comparative arrow
            comparator(j, j + 1, idNumber , massage="bubbleSort");



            if (arr[j] > arr[j + 1]) {


                // Swap elements if they are in the wrong order


                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }

    console.log("arr surface" + ArrowSurfaces.length);
    console.log("array surface" + ArraySurfaces.length);
    console.log("comp surface" + CompSurfaces.length);

}

console.log("bubble sort is running");