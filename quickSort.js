
//Remember: below all variables are using for ID numbers in quicksort to resolve collision issue
let spass = 0, // this variable for pass surfaces
    sa = 0, // this variable for start variable surfaces
    ea = 0; // this variable for end variable surfaces


function quickSort(arr, lb, ub) {
    if (lb < ub) {
        let loc = partition(arr, lb, ub);
        quickSort(arr, lb, loc - 1);
        quickSort(arr, loc + 1, ub);
    }




}



let idNumber = 'successfully';
let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
pass.innerHTML = '<pp class="dec">Pass ' + 'successfully ' + '</p>';
PassSurfaces.push('pass' + idNumber);


//createArray(arr, idNumber, pass);


function partition(arr, lb, ub) {
    const pivot = arr[lb];
    let start = lb + 1;
    let end = ub;


    while (start < end) {


        let idNumber = '' + spass;
        let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
        pass.innerHTML = '<pp class="dec">Pass ' + (spass + 1) + '</p>';
        PassSurfaces.push('pass' + idNumber);



        while (arr[start] <= pivot) {

   arrowCount=0;


            // ideas for every surface code passes
            idNumber = 'star' + spass + sa;
            console.log("id" + idNumber);

            //creating array and displaying in array surface
            createArray(arr, idNumber, pass);
            //creating Arrow and indicating the j th  element in array
            Arrow(lb, idNumber, massage = "pivot =");
            //creating Arrow and indicating the j+1 element in array
            Arrow(start, idNumber, massage = "start =");

           comparator(lb , start ,  idNumber , massage="quicksort" , swap="positive");

            //setting arrowCount to 0
            arrowCount = 0;

            sa++;
            start++;


        }
        arrowCount = 0;

        while (arr[end] > pivot) {

            // ideas for every surface code passes
            idNumber = 'end' + spass + ea;
            console.log("id" + idNumber);

            //creating array and displaying in array surface
            createArray(arr, idNumber, pass);
            //creating Arrow and indicating the j th  element in array
            Arrow(lb, idNumber, massage = "pivot =");
            //creating Arrow and indicating the j+1 element in array
            Arrow(end, idNumber, massage = "end =");

          comparator(lb , end ,  idNumber , massage="quicksort" , swap="negative");

            //setting arrowCount to 0
            arrowCount = 0;

            ea++;



            end--;
        }


        arrowCount = 0;

        if (start < end) {

            idNumber = 'ss' + getRandomNumber(70, 80);
            console.log("id" + idNumber);


            //creating array and displaying in array surface
            createArray(arr, idNumber, pass);
            //creating Arrow and indicating the j th  element in array
            Arrow(start, idNumber, massage = "start =");
            //creating Arrow and indicating the j+1 element in array
            Arrow(end, idNumber, massage = "end =");


            comparator(start , end ,  idNumber , massage="quicksort" , swap="startend");
            

            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

        }

        arrowCount = 0;
        spass++;


    }

    arrowCount = 0;


    let idNumber = 'pp' + spass + getRandomNumber(50, 60);
    let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
    pass.innerHTML = '<pp class="dec">Pass ' + (spass + 1) + '</p>';
    PassSurfaces.push('pass' + idNumber);

    //creating array and displaying in array surface
    createArray(arr, idNumber, pass);
    //creating Arrow and indicating the j th  element in array
    Arrow(lb, idNumber, massage = "pivot =");
    //creating Arrow and indicating the j+1 element in array
    Arrow(end, idNumber, massage = "end =");

    comparator(lb , end ,  idNumber , massage="quicksort",swap="pivotend");
    let temp = arr[lb];
    arr[lb] = arr[end];
    arr[end] = temp;

    aarrowCount = 0;




    idNumber = 'ppp' + getRandomNumber(100, 110);
    pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
    pass.innerHTML = '<pp class="dec">Pass ' + (spass + 1) + '</p>';
    PassSurfaces.push('pass' + idNumber);

    //creating array and displaying in array surface
    createArray(arr, idNumber, pass);
    //creating Arrow and indicating the j th  element in array






    return end;
}