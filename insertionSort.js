
function insertionSort(arr){

   const len=arr.length ;

    for (let i = 1; i < len; i++){

    let idNumber = '' + i;
    let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
    pass.innerHTML = '<pp class="dec">Pass ' + (i + 1) + '</p>';
    PassSurfaces.push('pass' + idNumber);


    const key = arr[i];


    arr.push(key);
    let j;

    for (j = i - 1; j > -2; j--) {


        //creating ideas for every surface code passes
        idNumber = '' + i + j;
        console.log("id" + idNumber);

        //creating array and displaying in array surface
        createArray(arr, idNumber, pass, indexapp = "no");




        if (j >= 0) {

        Arrow(j, idNumber, massage = "j:");
        //creating Arrow and indicating the j th  element in array
        Arrow(arr.length -1 ,  idNumber, massage = "key = ");


   arrowCount=0;
   

        }

        if (j >= 0 && arr[j] > key) {

            comparator(j, len, idNumber, massage = "insertionSort", swap = "shift");
            



            arr[j + 1] = arr[j];

        } else {

            break;
        }



    }

     //creating array and displaying in array surface
        createArray(arr, idNumber + i, pass, indexapp = "no");

        //creating Arrow and indicating the j th  element in array
        Arrow(j + 1, idNumber + i, massage = "j+1 :");

        //creating Arrow and indicating the j th  element in array
         Arrow(arr.length-1, idNumber + i, massage = "key= ");
        comparator(j + 1, len, idNumber + i, massage = "insertionSort", swap = "yes");




    arr[j + 1] = key;

    arrowCount = 0;
        arr.pop();

  if (i==len-1){


     //creating array and displaying in array surface
        createArray(arr, idNumber + i, pass );

    
}
}

}
