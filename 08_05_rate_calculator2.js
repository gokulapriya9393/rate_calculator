/*
To calculate the total_price

variable_price = base_price + (base_price * variable_percentage / 100) ;

total_price = variable_price + variable_price * tax / 100;

*/

var base_price = 10000 ;
var variable_percentage = 0.0 ;  // variable_percentage -  in percentage
var tax_percentage = 18.0 ;  // in percentage - for the current financial year
var total_price = 0.0 ;  

var age = 0 ;  
var insurance_type = '' ;  // silver, gold, gold_plus, platinum
var variable_price = 0.0 ; // temporary variable or internal variable


function cal_rate(){
    insurance_type = document.getElementById('insurance_type').value ;  
    //console.log(insurance_type);

    age = document.getElementById('age').value ;  
    //console.log(age);
    //console.log(typeof(age) + " before conversion");
    age = Number.parseInt(age);
    //console.log(typeof(age));

    // if-else ladder
    if(insurance_type == 'silver'){
        silver_rate();
        //console.log('Insurance selected is: Silver');
        //console.log('total_price in the if block: ' + total_price);
        document.getElementById('total_price').value = total_price ;

    }else if(insurance_type == 'gold'){
        gold_rate();
        //document.getElementById('total_price').value = total_price ;
        
        //console.log('Insurance selected is: Gold');
    }else if(insurance_type == 'gold_plus'){
       //console.log('Insurance selected is: Gold-Plus');
        goldplus_rate();
        //document.getElementById('total_price').value = total_price ;
        

    }else if(insurance_type == 'platinum'){
        //console.log('Insurance selected is: Platinum');
        platinum_rate();
       // document.getElementById('total_price').value = total_price ;
        
    }else{
        console.log('Insurance type selected is incorrect');
        alert('Insurance type selected is incorrect');
    }
   document.getElementById('total_price').value=total_price;
   //console.log('End the function');
}


function silver_rate(){
   
    if(age <= 30){
        variable_percentage = 5 ;
    }else if(age > 30 && age <= 40){
        variable_percentage = 10;
    }else if(age > 40 && age <= 50){
        variable_percentage = 15;
    }else if(age > 50 && age <= 60){
        variable_percentage = 20;
    }else{
        variable_percentage = 25;
    }
     cal_total_price();
}
    /*console.log('variable_percentage: ' + variable_percentage);

    variable_price = base_price + ( base_price * variable_percentage / 100 ) ; 
    console.log('variable_price: ' + variable_price);
    total_price = variable_price + ( variable_price * tax_percentage / 100 ) ;
    console.log('total_price: ' + total_price);
    //return total_price;*/



function gold_rate(){

    if(age <= 30){
        variable_percentage = 15;
    }else if( age > 30 &&  age <= 40 ){
        variable_percentage = 20;
    }else if( age > 40 &&  age <= 50 ){
        variable_percentage = 25;  
    }else if( age > 50 &&  age <= 60 ){
        variable_percentage = 30;
    }else{
        variable_percentage = 35;
    }
    cal_total_price();
}
   /* console.log('variable_percentage: ' + variable_percentage);

    variable_price = base_price + ( base_price * variable_percentage / 100 ) ; 
    console.log('variable_price: ' + variable_price);
    total_price = variable_price + ( variable_price * tax_percentage / 100 ) ;
    console.log('total_price: ' + total_price);
    
}*/

function goldplus_rate(){
    if(age <= 30){
        variable_percentage = 20;
    }else if( age > 30 &&  age <= 40 ){
        variable_percentage = 25;
    }else if( age > 40 &&  age <= 50 ){
        variable_percentage = 30;  
    }else if( age > 50 &&  age <= 60 ){
        variable_percentage = 35;
    }else{
        variable_percentage = 40;
    }
     cal_total_price();
}
   /* console.log('variable_percentage: ' + variable_percentage);

    variable_price = base_price + ( base_price * variable_percentage / 100 ) ; 
    console.log('variable_price: ' + variable_price);
    total_price = variable_price + ( variable_price * tax_percentage / 100 ) ;
    console.log('total_price: ' + total_price);
    
}*/

function platinum_rate(){
    if(age <= 30){
        variable_percentage = 30;
    }else if( age > 30 &&  age <= 40 ){
        variable_percentage = 35;
    }else if( age > 40 &&  age <= 50 ){
        variable_percentage = 40;  
    }else if( age > 50 &&  age <= 60 ){
        variable_percentage = 45;
    }else{
        variable_percentage = 50;
    }
    cal_total_price();
}
   /* console.log('variable_percentage: ' + variable_percentage);

    variable_price = base_price + ( base_price * variable_percentage / 100 ) ; 
    console.log('variable_price: ' + variable_price);
    total_price = variable_price + ( variable_price * tax_percentage / 100 ) ;
    console.log('total_price: ' + total_price);
    

}*/


function cal_total_price(){
    //console.log("***********Inside cak_total_price method***********");
    console.log('variable_percentage:' + variable_percentage);
    variable_price=base_price+(base_price*variable_percentage/100);
     console.log('variable_price:' + variable_price);
     total_price=variable_price + (variable_price* tax_percentage/ 100);
     console.log('total_price:' + total_price);

}


