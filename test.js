

function start(){//start of function
    for (var i=0; i < 3; i++) {//start of block
        console.log(i);
    }//end of block
    
    console.log(i);
}//end of function

// var => function-scoped that is why 3 is printed once the loop
//is terminated if we had set var to let we wouldn't see 3 in the console
// Since ES6: let, const are => block-scoped
start();