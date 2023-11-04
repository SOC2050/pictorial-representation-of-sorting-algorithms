
let gap; //this variable gap is using in comparator.js file for shell short displaySortMessage in that function

function shellSort(arr) {


//Remember: below all variables are using for ID numbers in quicksort to resolve collision issue

    let iloop = 0, // this variable for pass surfaces in i th for loop
        jloop = 0, // this variable for create array in j th while loop
        kloop = 0, // this variable for create array in if(j- gap > temp) condition
        lloop = 0, // this variable for create array in else condition
        mloop = 0; // this variable for create array in j and temp variable swaps

    const len = arr.length;

    gap = Math.floor(len / 2);


    while (gap > 0) {


        for (let i = gap; i < len; i++) {

            let idNumber = 's' + iloop;
            let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
            pass.innerHTML = '<pp class="dec">Pass ' + (i + 1) + '</p>';
            PassSurfaces.push('pass' + idNumber);

            iloop++;
            const temp = arr[i];


            let j = i;
            arr.push(temp);

            // Condition 1: Check if we are within array bounds

            while (j >= gap) {

                arrowCount = 0;


                //creating ideas for every surface code passes
                idNumber = 'shift' + i + jloop;
                console.log("id" + idNumber);
                jloop++;

                //creating array and displaying in array surface
                createArray(arr, idNumber, pass, indexapp = "no");

                Arrow(j, idNumber, massage = "j:");
                //creating Arrow and indicating the j th  element in array
                Arrow(arr.length - 1, idNumber, massage = "temp=");

                if (arr[j - gap] > temp) {


                    comparator(j - gap, len, idNumber, massage = "shellsort", swap = "jtoj_gap");
                    //  arrowCount=0;

                }


                arrowCount = 0;


                // Condition 2: Check if the element at the previous gap position is greater than the temporary value

                if (arr[j - gap] > temp) {

                    idNumber = 'jwithj_gap' + i + kloop;
                    console.log("id" + idNumber);
                    kloop++;

                    //creating array and displaying in array surface
                    createArray(arr, idNumber, pass, indexapp = "no");


                    comparator(j - gap, j, idNumber, massage = "shellsort", swap = "placing");


                    Arrow(j - gap, idNumber, massage = "j:");
                    //creating Arrow and indicating the j th  element in array
                    Arrow(j, idNumber, massage = "temp=");

                    arr[j] = arr[j - gap];

                    j -= gap;

                    arrowCount = 0;


                } else {

                    arrowCount = 0;
                    //creating ideas for every surface code passes
                    idNumber = 'not' + i + lloop;
                    console.log("id" + idNumber);
                    lloop++;
                    //creating array and displaying in array surface
                    createArray(arr, idNumber, pass, indexapp = "no");

                    Arrow(j - gap, idNumber, massage = "j:");
                    //creating Arrow and indicating the j th  element in array
                    Arrow(len, idNumber, massage = "temp=");

                    comparator(j - gap, len, idNumber, massage = "shellsort", swap = "not");

                    arrowCount = 0;
                    break; // Stop shifting elements if the condition is false

                }
            }


            arrowCount = 0;


            idNumber = 'jwithtemp' + i + mloop;
            console.log("id" + idNumber);
            mloop++;

            //creating array and displaying in array surface
            createArray(arr, idNumber, pass, indexapp = "no");


            comparator(j, len, idNumber, massage = "shellsort", swap = "jtotemp");


            Arrow(j, idNumber, massage = "j:");
            //creating Arrow and indicating the j th  element in array
            Arrow(len, idNumber, massage = "temp=");




            arrowCount = 0;
            arr.pop();

            // Placing the temporary value at its correct position
            arr[j] = temp;
        }

        // Updating the gap for the next iteration
        gap = Math.floor(gap / 2);
    }


    let idNumber = 'success' + iloop;
    let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
    pass.innerHTML = '<pp class="dec">Successfully completed</p>';
    PassSurfaces.push('pass' + idNumber);
    //creating array and displaying in array surface
    createArray(arr, idNumber, pass, indexapp = "no");

}