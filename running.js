

let isOpen = true;

const parent = document.getElementById('sort-container');

//const parentjs = createSurface('sot-container', 'container', 'lightblue', defaultClass = 'c');



document.getElementById('bubble').addEventListener('click', function() {

    if (isOpen) {


        generateRandomArray();
        bubbleSort(arr);

        isOpen = false;
    } else {

        removeDisplay();
        Left = [];

        isOpen = true;
    }

});



document.getElementById('selection').addEventListener('click', function() {

    if (isOpen) {


        generateRandomArray();
        selectionSort(arr);

        isOpen = false;
    } else {

        removeDisplay();
        Left = [];

        isOpen = true;
    }

});


document.getElementById('insertion').addEventListener('click', function() {

    if (isOpen) {


        generateRandomArray();
        insertionSort(arr);

        isOpen = false;
    } else {

        removeDisplay();
        Left = [];

        isOpen = true;
    }

});



document.getElementById('quick').addEventListener('click', function() {

    if (isOpen) {


        generateRandomArray();
        quickSort(arr , 0 , arr.length-1);

        isOpen = false;
    } else {

        removeDisplay();
        Left = [];

        isOpen = true;
    }

});

document.getElementById('shell').addEventListener('click', function() {

    if (isOpen) {


        generateRandomArray();
        shellSort(arr );

        isOpen = false;
    } else {

        removeDisplay();
        Left = [];

        isOpen = true;
    }

});


document.getElementById('count').addEventListener('click', function() {

    if (isOpen) {


        generateRandomArray(8 , 5 , 6 );
        countSort(arr);

        isOpen = false;
    } else {

        removeDisplay();
        Left = [];

        isOpen = true;
    }

});

document.getElementById('radix').addEventListener('click', function() {

    if (isOpen) {


        generateRandomArray();
        radixSort(arr);

        isOpen = false;
    } else {

        removeDisplay();
        Left = [];

        isOpen = true;
    }

});

