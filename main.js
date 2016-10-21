
window.onload =function(){
  console.log("fully loaded");
    $(document).ready(function () {
    var apiKey = 'uzaDNbSkaUSH21Q5GOJzdfIo9CpPy2eaMC562hen';
    var weatherUrl = '';


    var sub = document.getElementById("submit");
    sub.addEventListener('click',function(evt){
    evt.preventDefault();
    console.log("click");

    var city =document.querySelector("#city").value;
    var state=document.querySelector("#state").value;



    var url ="http://api.aerisapi.com/forecasts/11101?client_id=qIxLMU3zdjVdSMzJCzCkc&client_secret=uzaDNbSkaUSH21Q5GOJzdfIo9CpPy2eaMC562hen";
    console.log("submit" +url);


      // function makeRequest(){
      //    $.get(url)
      //     .done(function(response){
      //       console.log('jjjjjjjj',response[0].periods.minTempC)
      //       var info = response[0].periods.minTempC
      //     //  var data = document.createElement("div");
      //     //  document.write(data);
      //     //    document.body.appendChild(data);
      //     //    document.getElementByTagName('div').innerHTML(info)
      //     })
      //     .fail(function(xhr){console.log("error has occoured:",xhr)})
      //     var data = document.createElement("div");
      //     document.write(data);
      //       document.body.appendChild(data);
      //       console.log(data);
      //
      // }




      $.ajax({
         url:url,
         type:'GET',
         dataType:'JSON',
         success: function (res){
           console.log('line 76',res)
           var x = res.response[0].periods[0].maxTempC
           //25
           var data = document.createElement("div");
           document.getElementById('temperature').innerHTML = x;


         },
         error:function(xhr){ console.log(xhr)}
     });
   });
  });
};
