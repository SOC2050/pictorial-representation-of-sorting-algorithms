function RadixcountSort(arr, exp ,step) {

    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);

    let idNumber = 'RcountInput' + exp + '10';
    let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
    pass.innerHTML = '<p class="dec">Setting Radix Count Array </p>';
    PassSurfaces.push('pass' + idNumber);


    for (let i = 0; i < arr.length; i++) {

        arrowCount = 0;

        //creating ideas for every surface code passes
        idNumber = 'Rinput' + step+ '' + i;
        console.log("id" + idNumber);

        //creating array and displaying in array surface
        let text_surface = createArray(arr, idNumber, pass, indexapp = null, sort = "count", massage = "Input Array");
        //creating Arrow and indicating the j th  element in array
        Arrow(i, idNumber, massage = "i: ");

        text_surface.innerHTML = `<p class="dec">Increase Count[ ${arr[i]} ] to 1 ( i.e Count[ ${arr[i]} ]++ ) </p>`;


        arrowCount = 0;


        let pos = Math.floor(arr[i] / exp) % 10;

        count[pos]++;


        if (viewportHeight <= 708 &&
            viewportWidth <= 360) {


            userHeight = 50;
            userWidth = 28;


        } else {
            userHeight = 120;
            userWidth = 100;

        }

        Left = [];
     console.log("Left in radix"+Left);
        

        idNumber = 'Rcount' + step+ '' + i;
        console.log("id" + idNumber);

        //creating array and displaying in array surface
        text_surface = createArray(count, idNumber, pass, indexapp = null, sort = "count", massage = "Count Array");
        //creating Arrow and indicating the j th  element in array
        Arrow(pos, idNumber, massage = "i: ", countRadix = count[pos]);

        text_surface.innerHTML = `<p class="dec">Count[ ${pos } ] Increased by  1 </p>`;


        arrowCount = 0;

    console.log("Left in radix"+Left);
        if (viewportHeight <= 708 &&
            viewportWidth <= 360) {


            userHeight = 50;
            userWidth = 40;


        } else {
            userHeight = 140;
            userWidth = 110;

        }

        Left = [];
console.log("Left in radix"+Left);



    }

    arrowCount = 0;


    idNumber = 'Rcountupdate' + step + '20';
    pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
    pass.innerHTML = '<p class="dec">Updating Radix Count Array </p>';
    PassSurfaces.push('pass' + idNumber);




    for (let i = 1; i < 10; i++) {

        count[i] += count[i - 1];

        //creating ideas for every surface code passes
        idNumber = 'Rcountup' +step+''+ i;
        console.log("id" + idNumber);

        //creating array and displaying in array surface
        let text_surface = createArray(count, idNumber, pass, indexapp = null, sort = "count", massage = "Count Array Updating ");
        //creating Arrow and indicating the j th  element in array
        Arrow(i, idNumber, massage = "i: ", countRadix = count[i]);

        text_surface.innerHTML = `<p class="dec"> Do , Count[i] =  Count[i] + Count[i-1] <br> ${ count[i] } = Count[ ${i -1 } ] + Count[ ${i} ]</p>`;


    }



    for (let i = arr.length - 1; i >= 0; i--) {

        let pos = Math.floor(arr[i] / exp) % 10;
        arrowCount = 0;

        idNumber = 'Routput' +step+''+ i;
        pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
        pass.innerHTML = `<p class="dec"> Setting Input[${i}] to  OutPut Array in correct place</p>`;
        PassSurfaces.push('pass' + idNumber)

        idNumber = 'Rcountset' + step+''+i;

        createArray(count, idNumber, pass, indexapp = null, sort = null, massage = "Count Array ");

        idNumber = 'RInputset' + step+''+i;

        let text_surface = createArray(arr, idNumber, pass, indexapp = null, sort = "count", massage = "Input Array");
        //creating Arrow and indicating the j th  element in array
        Arrow(i, idNumber, massage = "i: ");

        text_surface.innerHTML = `<p class="dec"> Pick Input[${i}] & Place in OutPut Array <br> Such as , At Index = Count[ Input[ ${i} ] ] - 1  =  ${pos } </p>`;

        arrowCount = 0;





        output[count[pos] - 1] = arr[i];


        idNumber = 'Routputset' +step+''+ i;

        text_surface = createArray(output, idNumber, pass, indexapp = null, sort = "count", massage = "OutPut Array");
        //creating Arrow and indicating the j th  element in array
        Arrow(pos, idNumber, massage = "i: ", countRadix = arr[i]);

        text_surface.innerHTML = `<p class="dec"> Input[ ${i} ] = ${arr[i] }  Placed Successfully In OutPut Array <br> At OutPut[ ${pos } ] = ${arr[i] } </p>`;

        arrowCount = 0;





        count[pos]--;






    }

    for (let i = 0; i < arr.length; i++) {

        arr[i] = output[i];

    }
}

function radixSort(arr) {

    const max = Math.max(...arr);
  let step=1 ;
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {

        let idNumber = 'Place' +step+''+ exp;
        let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
        pass.innerHTML = '<p class="dec"> Placing on ' + exp + ' digit place </p>';
        PassSurfaces.push('pass' + idNumber);

        RadixcountSort(arr, exp ,step);
       step++;
    }
}