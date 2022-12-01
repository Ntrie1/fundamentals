function echoType(variable) {

    console.log(typeof variable);

    if (typeof variable === `string` || typeof variable === `number`) {
        console.log(variable);
    } else {
        console.log('Parameter is not suitable for printing');
    }












    // if(typeof variable === `string`){
    //     console.log(`string`);
    //     console.log(variable);
    // } else if( typeof variable === `number`){
    //     console.log(`number`);
    //     console.log(variable);
    // } else {
    //     console.log(`object`);
    //     console.log('Parameter is not suitable for printing');

    // }


}
echoType(4);