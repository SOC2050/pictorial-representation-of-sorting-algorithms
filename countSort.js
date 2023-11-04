function countSort(arr) {

    const key = Math.max(...arr) + 1;

    const count = Array(key).fill(0);

    const output = Array(arr.length).fill(0);

    let idNumber = 'countInput' + key;
    let pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
    pass.innerHTML = '<p class="dec">Setting Count Array </p>';
    PassSurfaces.push('pass' + idNumber);

    for (let i = 0; i < arr.length; i++) {

        arrowCount = 0;

        //creating ideas for every surface code passes
        idNumber = 'input' + i;
        console.log("id" + idNumber);

        //creating array and displaying in array surface
        let text_surface = createArray(arr, idNumber, pass, indexapp = null, sort = "count", massage = "Input Array");
        //creating Arrow and indicating the j th  element in array
        Arrow(i, idNumber, massage = "i: ");

        text_surface.innerHTML = `<p class="dec">Increase Count[ ${arr[i]} ] to 1 ( i.e Count[ ${arr[i]} ]++ ) </p>`;


        arrowCount = 0;


        count[arr[i]] += 1;


        //creating ideas for every surface code passes
        idNumber = 'count' + i;
        console.log("id" + idNumber);

        //creating array and displaying in array surface
        text_surface = createArray(count, idNumber, pass, indexapp = null, sort = "count", massage = "Count Array");
        //creating Arrow and indicating the j th  element in array
        Arrow(arr[i], idNumber, massage = "i: ", countRadix = count[arr[i]]);

        text_surface.innerHTML = `<p class="dec">Count[ ${arr[i]} ] Increased by  1 </p>`;


        arrowCount = 0;

    }

    arrowCount = 0;


    idNumber = 'countupdate' + key;
    pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
    pass.innerHTML = '<p class="dec">Updating Count Array </p>';
    PassSurfaces.push('pass' + idNumber);



    for (let i = 1; i < key; i++) {


        arrowCount = 0;
        count[i] += count[i - 1];

        //creating ideas for every surface code passes
        idNumber = 'countup' + i;
        console.log("id" + idNumber);

        //creating array and displaying in array surface
        let text_surface = createArray(count, idNumber, pass, indexapp = null, sort = "count", massage = "Count Array Updating ");
        //creating Arrow and indicating the j th  element in array
        Arrow(i, idNumber, massage = "i: ", countRadix = count[i]);

        text_surface.innerHTML = `<p class="dec"> Do , Count[i] =  Count[i] + Count[i-1] <br> ${ count[i] } = Count[ ${i -1 } ] + Count[ ${i} ]</p>`;


        arrowCount = 0;


    }

    let i = arr.length - 1;




    while (i >= 0) {

        arrowCount = 0;

        let pos = count[arr[i]] - 1;


        idNumber = 'output' + i;
        pass = createSurface('pass' + idNumber, 'mai-surface', 'lightblue', defaultClass = 'c');
        pass.innerHTML = `<p class="dec"> Setting Input[${i}] to  OutPut Array in correct place</p>`;
        PassSurfaces.push('pass' + idNumber)

        idNumber = 'countset' + i;

        createArray(count, idNumber, pass, indexapp = null, sort = null, massage = "Count Array ");

        idNumber = 'Inputset' + i;

        let text_surface = createArray(arr, idNumber, pass, indexapp = null, sort = "count", massage = "Input Array");
        //creating Arrow and indicating the j th  element in array
        Arrow(i, idNumber, massage = "i: ");

        text_surface.innerHTML = `<p class="dec"> Pick Input[${i}] & Place in OutPut Array <br> Such as , At Index = Count[ Input[ ${i} ] ] - 1  =  ${pos } </p>`;

        arrowCount = 0;



        output[pos] = arr[i];


        idNumber = 'outputset' + i;

        text_surface = createArray(output, idNumber, pass, indexapp = null, sort = "count", massage = "OutPut Array");
        //creating Arrow and indicating the j th  element in array
        Arrow(pos, idNumber, massage = "i: ", countRadix = arr[i]);

        text_surface.innerHTML = `<p class="dec"> Input[ ${i} ] = ${arr[i] }  Placed Successfully In OutPut Array <br> At OutPut[ ${pos } ] = ${arr[i] } </p>`;

        arrowCount = 0;



        count[arr[i]] -= 1;

        i--;








    }

}