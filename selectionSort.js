

function selectionSort(arr) {

    const len = arr.length;


    for (let i = 0; i < len - 1; i++) {

        let minIndex = i;



        let idNumber = '' + i;
        let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
        pass.innerHTML = '<pp class="dec">Pass ' + (i + 1) + '</p>';
        PassSurfaces.push('pass' + idNumber);


        // Find the smallest element in the unsorted portion

        for (let j = i + 1; j < len; j++) {

            //creating ideas for every surface code passes
            idNumber = '' + i + j;
            console.log("id" + idNumber);

            //creating array and displaying in array surface
            createArray(arr, idNumber, pass);

           
                //creating Arrow and indicating the j th  element in array
                Arrow(minIndex, idNumber, massage = "min = ");

            if (arr[j] < arr[minIndex]) {

                comparator(minIndex, j, idNumber, massage = "selectionSort", swap = "switchmin");


                minIndex = j;
                //creating Arrow and indicating the j th  element in array
                Arrow(minIndex, idNumber, massage = "Nmin =");

            } else {


                //creating Arrow and indicating the j+1 element in array
                Arrow(j, idNumber, massage = "j : ");
                comparator(minIndex, j, idNumber, massage = "selectionSort", swap = "next");





            }

            //setting arrowCount to 0
            arrowCount = 0;
        }

        // Swap the found smallest element with the first element of the unsorted portion
        if (minIndex !== i) {

           
            //creating array and displaying in array surface
            createArray(arr, idNumber+i, pass);

           
             //creating Arrow and indicating the j th  element in array
             Arrow(i, idNumber+i, massage = "Omin =");
             Arrow(minIndex, idNumber+i, massage = "Nmin =");
           comparator(i, minIndex , idNumber+i, massage = "selectionSort", swap = "yes");


            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
 
           arrowCount = 0;
        }

    }


}

console.log("selection sort is running");