<?php 
   
    header("Access-Control-Allow-Origin: *");
    
    $street=$_GET["street"];
    $city=$_GET["city"];
    $state=$_GET["state"];
    $units_value=$_GET["units_value"];

    $apiKeyforGeocode="AIzaSyAbmNO8Q5EYh6xHAfAN0LMvcAmLmOPEVCE";

$query="https://maps.googleapis.com/maps/api/geocode/json?address=".urlencode($street.",".$city.",".$state)."&key=$apiKeyforGeocode";     



    
    $jsonObject=file_get_contents($query);
    
    $obj = json_decode($jsonObject);

    
    $intermediate=$obj->{'results'};
    $second=$intermediate[0]->{'geometry'};
    $third=$second->{'location'};
    $latitude=$third->{'lat'};
    $longitude=$third->{'lng'};
    
        
    $apikey="7322e9cb5f7b66e8d75faeae0a206b8b";
        
    $forecastioquery="https://api.forecast.io/forecast/$apikey/".urlencode($latitude.",".$longitude)."?units=$units_value&exclude=flags";
        
        $jsonsecondObject=file_get_contents($forecastioquery);
        echo json_encode($jsonsecondObject);
    
?>

