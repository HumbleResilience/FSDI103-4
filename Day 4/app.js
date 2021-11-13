let hunger=10;
let happiness=50;
let energy=50;

// the hunger, happiness and energy should be greater than 0 and less than 100
// if statement

function displayValues(){
    document.getElementById("petHunger").innerHTML=`${hunger}`
    document.getElementById("petHappiness").innerHTML=`${happiness}`
    document.getElementById("petEnergy").innerHTML=`${energy}`
}

function feed(){
if((hunger>0 && hunger<100) && (happiness>0 && happiness<100))
    {
        //increasing happiness and decrease hunger
        happiness=happiness+10;
        hunger=hunger-10;
        displayValues();
    }

   
}

function pet(){
    if(happiness>0 && happiness<100){
        //increase happiness
        happiness=happiness+10;
        displayValues();
    }
    
    
}


function play(){
    if((happiness>0 && happiness<100) && (energy>0 && energy<100))
        {
            //increasing happiness and energy
            happiness=happiness+10;
            energy=energy-10;
            displayValues();
        }
    
       
    }