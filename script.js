//$('body').hide(1);
$('#texto').fadeOut();
$('header').fadeOut(1);
$('section').fadeOut(1);
$('footer').fadeOut(1);

$('header').fadeIn(2000);
$('section').fadeIn(3000);
$('footer').fadeIn(5000);



setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();


function calculo(){
   let nome = document.getElementById("nome").value;
   let total = document.getElementById("total").value;
   let taxa = document.getElementById("taxa").value;
   taxa /= 100;
   let meses = document.getElementById("meses").value;

   /*
    console.log(total);
    console.log(pago);
    console.log(taxa);
    console.log(parcelas);
    console.log(financiado);
   */

    let valor = ((( 1 + taxa )**meses  )-1)/taxa ;
    valor *= total;
    valor = valor.toFixed(2);

    if(total == "" || taxa == "" || nome == "" || meses == "" ){
        var texto = "Favor preencher todos os campos!" 
    }
    else{

    
   var texto = "Senhor "+ nome +", caso seja aplicado um valor de R$"+ total +" à um juros de " + taxa*100 +"% ao mês, durante "+ meses +" meses, o valor poupado será de "+ valor+ " reais!";
    }
   $('#texto').fadeIn(2000);

   document.getElementById("texto").innerHTML = texto;
   console.log(texto)
   
   
}

