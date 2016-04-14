$(document).ready(function(){
    
    
    var head;
    var summaryFirst;
    var summarySecond;var summaryThird; var summaryFourth; var summaryFifth; var summarySixth; var summarySeven;
     var winS="";
     var vb="";
     var pre="";
    var city="";
    var state="";
    var temp;
    var temperature;
    var imgsrc;
    var degreeValue;
    
    window.fbAsyncInit = function() {
    FB.init({
      appId      : '959637980772693',
      xfbml      : true,
      version    : 'v2.5'
    });
  };
    
   
     
     $('#fb').click(function(){
         
         
        
        FB.login(function(response){
              
            
            if (response.status === 'connected') {
                var title="Current Weather in" + " " + city + "," + state;
               
                var summary=head.currently.summary;
                var finalTemp;
                if(degreeValue=="fa"){
                 finalTemp=temperature+"&deg;F";}
                else{finalTemp=temperature+"&deg;C";
                }
                
                var desc=summary + "," + finalTemp;
                
                var imageSource=imgsrc;
                
                FB.ui({
                          method: 'feed',
                          name: title,
                          link: 'http://forecast.io/',
                          picture: imageSource,
                          caption: 'WEATHER INFORMATION FROM FORECAST.IO',
                          description: desc,
                          display: 'popup'
                        }, function(response){
                            if(response && response.post_id){alert("Posted Succesfully");} else{alert("Not posted");}
                            });
                
                
                
                
            } else if (response.status === 'not_authorized') {
                alert("Not posted");
            } else {
                
                alert("Not posted");
                }
            
            
        });
        
        
    });
    
    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
    
    
    //Clear button
    
    $('#clear').click(function(){
    
        document.getElementById("streetAddr").value="";
        document.getElementById("city").value="";
        document.getElementById("statesList").options[0].selected=true;
        document.getElementById("fah").checked=true;
        document.getElementById("result").style.display='none';
        if(document.getElementById("streetAddr-error"))
        {document.getElementById("streetAddr-error").style.display= 'none';}
        if(document.getElementById("city-error")){document.getElementById("city-error").style.display= 'none';}
        if(document.getElementById("statesList-error")){document.getElementById("statesList-error").style.display= 'none';}
        $("#basicMap").html("");
        $('#next7').removeClass('tab-pane active');
        $('#next24').removeClass('tab-pane active');
        $('#next7').addClass('tab-pane');
        $('#next24').addClass('tab-pane');
         $('#n24').removeClass('active');
        $('#n7').removeClass('active');

        $('#rN').addClass('active');
        $('#rightNow').addClass('tab-pane active');
    
    });
    
    
    
 $("#first").delegate("tr.rows", "click", function(){
        
            
            var dayName = $("#first tr:eq(0) td:eq(0)").text();
            var monthDate=$("#first tr:eq(1) td:eq(0)").text();
            var src=$("#first tr:eq(2) td:eq(0)").find('img').attr('src');
            var cityName=document.getElementById("city").value;
            var humiditT=parseInt((parseFloat(head.daily.data[1].humidity)*100)) + "%";
            var windSpeedT=head.daily.data[1].windSpeed;
            var visibleT=parseFloat(head.daily.data[1].visibility).toFixed(2);
            var pressureT=parseFloat(head.daily.data[1].pressure);
            var headerString="Weather in" + " " + cityName + " " + "on" + " " + monthDate;
         
        
             document.getElementById("headingModal").innerHTML=headerString;
             document.getElementById("imageIcon").src=src;
             document.getElementById("summaryName").innerHTML=dayName+":"+ " ";
             document.getElementById("summarySpan").innerHTML=summaryFirst;
             document.getElementById("humidT").innerHTML=humiditT;
             document.getElementById("ws").innerHTML=windSpeedT + winS;
              if(!isNaN(visibleT)){
             document.getElementById("visibleT").innerHTML=visibleT + vb;
             } else{
                 document.getElementById("visibleT").innerHTML="N.A";
            }
         
             document.getElementById("pressureT").innerHTML=pressureT + pre;
             $('#myModal').modal('show');
           
        });
    
    $("#second").delegate("tr.rows", "click", function(){
        
            
            var dayName = $("#second tr:eq(0) td:eq(0)").text();
            var monthDate=$("#second tr:eq(1) td:eq(0)").text();
            var src=$("#second tr:eq(2) td:eq(0)").find('img').attr('src');
            var humiditT=parseInt((parseFloat(head.daily.data[2].humidity)*100)) + "%";
            var windSpeedT=head.daily.data[2].windSpeed;
            var visibleT=parseFloat(head.daily.data[2].visibility).toFixed(2);
            var pressureT=parseFloat(head.daily.data[2].pressure);
            var cityName=document.getElementById("city").value;
        
            var headerString="Weather in" + " " + cityName + " " + "on" + " " + monthDate;
            
         
        
             document.getElementById("headingModal").innerHTML=headerString;
             document.getElementById("imageIcon").src=src;
             document.getElementById("summaryName").innerHTML=dayName + " : " + " ";
            document.getElementById("summarySpan").innerHTML=summarySecond;
            document.getElementById("humidT").innerHTML=humiditT;
             document.getElementById("ws").innerHTML=windSpeedT + winS;
              if(!isNaN(visibleT)){
             document.getElementById("visibleT").innerHTML=visibleT + vb;
             } else{
                 document.getElementById("visibleT").innerHTML="N.A";
            }
         
             document.getElementById("pressureT").innerHTML=pressureT + pre;
            
             $('#myModal').modal('show');
           
        });
        
     $("#third").delegate("tr.rows", "click", function(){
        
            
            var dayName = $("#third tr:eq(0) td:eq(0)").text();
            var monthDate=$("#third tr:eq(1) td:eq(0)").text();
            var src=$("#third tr:eq(2) td:eq(0)").find('img').attr('src');
             var humiditT=parseInt((parseFloat(head.daily.data[3].humidity)*100)) + "%";
            var windSpeedT=head.daily.data[3].windSpeed;
            var visibleT=parseFloat(head.daily.data[3].visibility).toFixed(2);
            var pressureT=parseFloat(head.daily.data[3].pressure);
            var cityName=document.getElementById("city").value;
        
            var headerString="Weather in" + " " + cityName + " " + "on" + " " + monthDate;
            
         
        
             document.getElementById("headingModal").innerHTML=headerString;
             document.getElementById("imageIcon").src=src;
             document.getElementById("summaryName").innerHTML=dayName + " : " + " ";
             document.getElementById("summarySpan").innerHTML=summaryThird;
             document.getElementById("humidT").innerHTML=humiditT;
             document.getElementById("ws").innerHTML=windSpeedT + winS;
              if(!isNaN(visibleT)){
             document.getElementById("visibleT").innerHTML=visibleT + vb;
             } else{
                 document.getElementById("visibleT").innerHTML="N.A";
            }
         
             document.getElementById("pressureT").innerHTML=pressureT + pre;
            
             $('#myModal').modal('show');
           
        });
          
        
       $("#fourth").delegate("tr.rows", "click", function(){
        
            
            var dayName = $("#fourth tr:eq(0) td:eq(0)").text();
            var monthDate=$("#fourth tr:eq(1) td:eq(0)").text();
            var src=$("#fourth tr:eq(2) td:eq(0)").find('img').attr('src');
            var cityName=document.getElementById("city").value;
            var humiditT=parseInt((parseFloat(head.daily.data[4].humidity)*100)) + "%";
            var windSpeedT=head.daily.data[4].windSpeed;
            var visibleT=parseFloat(head.daily.data[4].visibility).toFixed(2);
            var pressureT=parseFloat(head.daily.data[4].pressure);
            var headerString="Weather in" + " " + cityName + " " + "on" + " " + monthDate;
            $('#summaryName > span').text('new content here');
         
        
             document.getElementById("headingModal").innerHTML=headerString;
             document.getElementById("imageIcon").src=src;
             document.getElementById("summaryName").innerHTML=dayName + " : " + " ";
            document.getElementById("summarySpan").innerHTML=summaryFourth;
             document.getElementById("humidT").innerHTML=humiditT;
             document.getElementById("ws").innerHTML=windSpeedT + winS;
              if(!isNaN(visibleT)){
             document.getElementById("visibleT").innerHTML=visibleT + vb;
             } else{
                 document.getElementById("visibleT").innerHTML="N.A";
            }
         
             document.getElementById("pressureT").innerHTML=pressureT + pre;
             
             $('#myModal').modal('show');
           
        });
    
         $("#fifth").delegate("tr.rows", "click", function(){
        
            
            var dayName = $("#fifth tr:eq(0) td:eq(0)").text();
            var monthDate=$("#fifth tr:eq(1) td:eq(0)").text();
            var src=$("#fifth tr:eq(2) td:eq(0)").find('img').attr('src');
             var humiditT=parseInt((parseFloat(head.daily.data[5].humidity)*100)) + "%";
            var windSpeedT=head.daily.data[5].windSpeed;
            var visibleT=parseFloat(head.daily.data[5].visibility).toFixed(2);
            var pressureT=parseFloat(head.daily.data[5].pressure);
            var cityName=document.getElementById("city").value;
        
            var headerString="Weather in" + " " + cityName + " " + "on" + " " + monthDate;
            
         
        
             document.getElementById("headingModal").innerHTML=headerString;
             document.getElementById("imageIcon").src=src;
             document.getElementById("summaryName").innerHTML=dayName + " : " + " ";
             document.getElementById("summarySpan").innerHTML=summaryFifth;
              document.getElementById("humidT").innerHTML=humiditT;
             document.getElementById("ws").innerHTML=windSpeedT + winS;
              if(!isNaN(visibleT)){
             document.getElementById("visibleT").innerHTML=visibleT + vb;
             } else{
                 document.getElementById("visibleT").innerHTML="N.A";
            }
         
             document.getElementById("pressureT").innerHTML=pressureT + pre;
             
             
             $('#myModal').modal('show');
           
        });
    
         $("#sixth").delegate("tr.rows", "click", function(){
        
            
            var dayName = $("#sixth tr:eq(0) td:eq(0)").text();
            var monthDate=$("#sixth tr:eq(1) td:eq(0)").text();
            var src=$("#sixth tr:eq(2) td:eq(0)").find('img').attr('src');
            var cityName=document.getElementById("city").value;
            var humiditT=parseInt((parseFloat(head.daily.data[6].humidity)*100)) + "%";
            var windSpeedT=head.daily.data[6].windSpeed;
            var visibleT=parseFloat(head.daily.data[6].visibility).toFixed(2);
            var pressureT=parseFloat(head.daily.data[6].pressure);
            var headerString="Weather in" + " " + cityName + " " + "on" + " " + monthDate;
            
         
        
             document.getElementById("headingModal").innerHTML=headerString;
             document.getElementById("imageIcon").src=src;
             document.getElementById("summaryName").innerHTML=dayName + " : " + " ";
             document.getElementById("summarySpan").innerHTML=summarySixth;
             document.getElementById("humidT").innerHTML=humiditT;
             document.getElementById("ws").innerHTML=windSpeedT + winS;
              if(!isNaN(visibleT)){
             document.getElementById("visibleT").innerHTML=visibleT + vb;
             } else{
                 document.getElementById("visibleT").innerHTML="N.A";
            }
         
             document.getElementById("pressureT").innerHTML=pressureT + pre;
             
             $('#myModal').modal('show');
           
        });
        
     $("#seven").delegate("tr.rows", "click", function(){
        
            
            var dayName = $("#seven tr:eq(0) td:eq(0)").text();
            var monthDate=$("#seven tr:eq(1) td:eq(0)").text();
            var src=$("#seven tr:eq(2) td:eq(0)").find('img').attr('src');
            var cityName=document.getElementById("city").value;
            var humiditT=parseInt((parseFloat(head.daily.data[7].humidity)*100)) + "%";
            var windSpeedT=head.daily.data[7].windSpeed;
            var visibleT=parseFloat(head.daily.data[7].visibility).toFixed(2);
            var pressureT=parseFloat(head.daily.data[7].pressure);
            var headerString="Weather in" + " " + cityName + " " + "on" + " " + monthDate;
            
         
        
             document.getElementById("headingModal").innerHTML=headerString;
             document.getElementById("imageIcon").src=src;
             document.getElementById("summaryName").innerHTML=dayName + " : " + " ";
             document.getElementById("summarySpan").innerHTML=summarySeven;
             document.getElementById("humidT").innerHTML=humiditT;
             document.getElementById("ws").innerHTML=windSpeedT + winS;
             if(!isNaN(visibleT)){
             document.getElementById("visibleT").innerHTML=visibleT + vb;
             } else{
                 document.getElementById("visibleT").innerHTML="N.A";
            }
         
             document.getElementById("pressureT").innerHTML=pressureT + pre;
             
             $('#myModal').modal('show');
           
        });
    
    
   
    
    function getSource(src){
        
       switch(src){
        case 'clear-day':
                src="clear.png";
                break;
        case 'clear-night':
                src="clear_night.png";
                break;
        case 'partly-cloudy-day':
                src="cloud_day.png";
                break;
        case 'partly-cloudy-night':
                src="cloud_night.png";
                break;
        default:
               src=src+".png";
        }
        
        var imgsrc="http://cs-server.usc.edu:45678/hw/hw8/images/"+src;
        
        return imgsrc;
        
        
    }
    function displayData(output,city,state,degree){
        
        $("#basicMap").html("");
        
        //First Tab
        
         head=JSON.parse(output);
         var src=head.currently.icon;
         var latitude=head.latitude;
         var longitude=head.longitude;
        
        imgsrc=getSource(src);
        
    
        var summary=head.currently.summary;
        var weatherLocation=summary + " " + "in" + " " + city + "," + state;
        var prepIntensity=parseFloat(head.currently.precipIntensity);
        var prepText="";
        var windSpeed=parseFloat(head.currently.windSpeed).toFixed(2);
       
        var dP=parseFloat(head.currently.dewPoint).toFixed(2);
        var visibility=parseFloat(head.currently.visibility).toFixed(2);
        
       
    
        if(degree=="fa"){
            temp="&deg"+"F";
            winS="mph";
            vb="mi";
            pre="mb";
            
        }else if(degree=="cs"){
            temp="&deg"+"C"; 
            prepIntensity=parseFloat((prepIntensity / 25.4));
            winS="m/s";
            vb="km";
            pre="hPa";
        }
        temperature=parseInt(head.currently.temperature);
        var maxtemp=head.daily.data[0].temperatureMax;  
        var mintemp=head.daily.data[0].temperatureMin;
        var precipProb=parseInt(head.currently.precipProbability * 100)+ "%";
        var humidity=parseFloat(head.currently.humidity) * 100;
        var humidityFinal=parseInt(humidity);
        var timezone=head.timezone;
        moment.tz.setDefault(timezone);
        var sunriseTime=head.daily.data[0].sunriseTime;
        var sunrTime=moment(sunriseTime*1000).format("hh:mm A");
        var sunsetTime=head.daily.data[0].sunsetTime;
        var sunsTime=moment(sunsetTime*1000).format("hh:mm A");
    
        
        if( prepIntensity >= 0 && prepIntensity < 0.002){
         prepText= "None";   
        }else if(prepIntensity >= 0.002 && prepIntensity < 0.017){
            prepText= "Very light";   
        }else if(prepIntensity >= 0.017 && prepIntensity < 0.1){
            prepText="Light";   
        }else if(prepIntensity >= 0.1 && prepIntensity < 0.4){
            prepText="Moderate";   
        }else if(prepIntensity >= 0.4){
            prepText="Heavy";   
        }
        
        
        
        
        document.getElementById("weatherImage").src= imgsrc;
        document.getElementById("mini").innerHTML = "L" + ":" + mintemp + "&deg";
        document.getElementById("maxi").innerHTML="H" + ":" + maxtemp + "&deg";
        document.getElementById("weather").innerHTML = weatherLocation;  
        document.getElementById("temp").innerHTML= temperature + "<sup style='font-size:20px; vertical-align:top; position:relative; top:1.4em;'>"+ temp + '<sup>';
        document.getElementById("precip").innerHTML= prepText;
        document.getElementById("chance").innerHTML= precipProb;
        document.getElementById("wSpeed").innerHTML = windSpeed + " " + winS;
        document.getElementById("dewPt").innerHTML = dP + " " + temp;
        document.getElementById("humid").innerHTML= humidityFinal + "%";
        document.getElementById("visible").innerHTML= visibility + " " + vb;
        document.getElementById("sunrise").innerHTML=sunrTime;
        document.getElementById("sunset").innerHTML=sunsTime;
        //Second Tab

        
        
        
        for(var s=0;s<24;s++){
        
        var timing=head.hourly.data[s].time;
        var setTime=moment(timing*1000).format("hh:mm A");
        var image=head.hourly.data[s].icon;
        var imageSrc=getSource(image);
        var cloudCover=parseInt((parseFloat(head.hourly.data[s].cloudCover)*100)) + "%";
        var nextTemp=parseFloat(head.hourly.data[s].temperature).toFixed(2);
        var windSpeed=head.hourly.data[s].windSpeed;
        var hum=parseInt((parseFloat(head.hourly.data[s].humidity)*100)) + "%";
        var vi=parseFloat(head.hourly.data[s].visibility).toFixed(2);
        var pressure=parseFloat(head.hourly.data[s].pressure);   
        
        document.getElementById("T"+s).innerHTML=setTime;
        document.getElementById("weatherImage"+s).src=imageSrc;
        document.getElementById("cloud"+s).innerHTML= cloudCover;
        document.getElementById("nextTemp"+s).innerHTML= nextTemp;
        document.getElementById("windy"+s).innerHTML=windSpeed + winS;
        document.getElementById("hum"+s).innerHTML=hum;
        document.getElementById("vi"+s).innerHTML=vi + vb;
        document.getElementById("pres"+s).innerHTML=pressure + pre;
        
        }
        
        //Third Tab
        
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var getUnixTime;
        var convertTime;
        var day;
        var month;
        var date;
        
        for(var t=1;t<8;t++) {
        getUnixTime=head.daily.data[t].time;
        convertTime=new Date(getUnixTime*1000);
        day=days[convertTime.getDay()];
        month=months[convertTime.getMonth()];
        date=convertTime.getDate();
        var imageThirdTab=head.hourly.data[t].icon;
        var imageSrcThirdTab=getSource(imageThirdTab);
        var maxtempThirdTab=parseInt(head.daily.data[t].temperatureMax);  
        var mintempThirdTab=parseInt(head.daily.data[t].temperatureMin);
        
        document.getElementById("day"+t).innerHTML= day;
        document.getElementById("date"+t).innerHTML= month + " " + date;
        document.getElementById("pic"+t).src= imageSrcThirdTab;
        document.getElementById("mintemp"+t).innerHTML=mintempThirdTab+"&deg;";
        document.getElementById("maxtemp"+t).innerHTML=maxtempThirdTab+"&deg;";
        
        
        }
        
        
        //For Modal
        summaryFirst=head.daily.data[1].summary;
        summarySecond=head.daily.data[2].summary;
        summaryThird=head.daily.data[3].summary;
        summaryFourth=head.daily.data[4].summary;
        summaryFifth=head.daily.data[5].summary;
        summarySixth=head.daily.data[6].summary;
        summarySeven=head.daily.data[7].summary;
        
        
        
        
        
        document.getElementById("tempe").innerHTML= "(" + temp + ")";
        
    $('#next7').removeClass('tab-pane active');
    $('#n24').removeClass('active');
    $('#next24').removeClass('tab-pane active');
    $('#n7').removeClass('active');
    $('#next7').addClass('tab-pane');
    $('#next24').addClass('tab-pane');
    $('#rightNow').addClass('tab-pane active');
    $('#rN').addClass('active');
    document.getElementById("result").style.display = 'block';   
        
        //Map
        
       
        
	var layer_name = "clouds";
    var layer_name1="precipitation";
	var lat = latitude;
	var lon = longitude;
	var zoom = 7;
	


	var map = new OpenLayers.Map("basicMap", 
	{
		units:'m',
		projection: "EPSG:900913",
		displayProjection: new OpenLayers.Projection("EPSG:4326")
	});

	var osm = new OpenLayers.Layer.XYZ(
		"osm",
		"http://${s}.tile.openweathermap.org/map/osm/${z}/${x}/${y}.png",
		{
			numZoomLevels: 18, 
			sphericalMercator: true
		}
	);


    var mapnik = new OpenLayers.Layer.OSM();

    var preciplayer = new OpenLayers.Layer.XYZ(
		"layer "+layer_name1,
		"http://${s}.tile.openweathermap.org/map/"+layer_name1+"/${z}/${x}/${y}.png",
        //"http://wind.openweathermap.org/map/"+layer_name+"/${z}/${x}/${y}.png",
		{
//			numZoomLevels: 19, 
			isBaseLayer: false,
			opacity: 0.5,
			sphericalMercator: true

		}
	);

	var cloudlayer = new OpenLayers.Layer.XYZ(
		"layer "+layer_name,
		"http://${s}.tile.openweathermap.org/map/"+layer_name+"/${z}/${x}/${y}.png",
        //"http://wind.openweathermap.org/map/"+layer_name+"/${z}/${x}/${y}.png",
		{
//			numZoomLevels: 19, 
			isBaseLayer: false,
			opacity: 0.6,
			sphericalMercator: true

		}
	);

	var centre = new OpenLayers.LonLat(lon, lat).transform(new OpenLayers.Projection("EPSG:4326"), 
								new OpenLayers.Projection("EPSG:900913"));
	map.addLayers([mapnik, osm, preciplayer, cloudlayer]);
    map.setCenter( centre, zoom);
    
   
      
        
    }
   
  
    
    $('#searchForm').validate({
        
        rules : {
            
            streetAddr: "required",
            city : "required",
            statesList : "required"
        },
        
        messages : {
            
            streetAddr : "Please enter the street address",
            city : "Please enter the city",
            statesList : "Please select a state"
            
            
        },
        
        submitHandler: function(form){
            
            var units_value;
            var streetName=form.streetAddr.value;
            city=form.city.value;
           state=form.statesList.options[form.statesList.selectedIndex].value;
            if(document.getElementById('fah').checked){
            degreeValue=document.getElementById('fah').value;}
            else if(document.getElementById('cel').checked){ 
                degreeValue=document.getElementById('cel').value;}
            if(degreeValue=="fa"){ 
                units_value="us";}
            else if(degreeValue=="cs"){
            units_value="si";}
                                      
            
            
            
            $.ajax({	
                        url: 'http://forecast2015-env.elasticbeanstalk.com/index.php',
                        
                        data:	{	first : "first",
                                    street:	streetName,	
                                    city:	city,
                                    state: state,
                                    units_value: units_value
                                },
                        dataType: 'json',
                        type:	'GET',
                        success:	function(output)	{
                                            
                                     displayData(output,city,state,degreeValue);
                            
                                        
                                    }
                
                                ,
                
                        error:	     function(){
                                        alert('firsterror');
                                    }
                    });
            
            
        
        
    }
    
    });
   
    
    
    
    
    
    
    
});
