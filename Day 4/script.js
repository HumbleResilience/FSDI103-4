console.log("script");

let x=0;
function counter(){
   x++;
   console.log(x);
   msg('arg1','mssage 2');
}

function msg(arg1,arg2){
    console.log("this is a message " + arg1);
    console.log("Thsi is" + arg2);
}

function total( price, qty){
    let subtotal=price*qty;
    console.log(subtotal);
    return subtotal;
}

function taxesCalc(product, subtotal ){
    let total= subtotal*1.65;
    document.write(`<div>
        <p>My Amazon Online Store</p>
        <p>Tijuana, Mexico</p>
        <p> 555-555-5555<p>
        <br>
        <br>
        <p>description qty price</p>
        <p> ${product} </p>
        <p>Subtotal-----${subtotal}</p>
        <p>Total-------${total}</p>
    </div>`);
    return total;
}

taxesCalc("mac m1",total(1000, 2));
taxesCalc("Headset", total(50, 1));


