function getGeolocation(){      //Main function for getting the geographic location,triggered when the page button is clicked
    //Get the p element on the page with the id 'geolocation', used to display prompts or location results
    const x=document.getElementById("geolocation");
    //Check if the current browser supports the HTML5 geolocation API
    if(navigator.geolocation){
        //Change page text: Getting location
        x.innerHTML="Getting your location...";
        //Call method to get current location
        //Parameter 1:success callback function showGeolocation;Parameter 2:failure callback function
        navigator.geolocation.getCurrentPosition(
            showGeolocation,
            function(error){
                //Determine the error type:user denied location permission
                if(error.code===error.PERMISSION_DENIED){
                    x.innerHTML="Location permission was denied.";
                }
                else if(error.code===error.POSITION_UNAVAILABLE){
                    //Determine the type of error:location information is unavailable,can't get coordinates
                    x.innerHTML="Location information is unavailable.";
                }
                else if(error.code===error.TIMEOUT){
                    //Check error type:location request timeout
                    x.innerHTML="The request timed out.";
                }
                else{
                    //Other unknown errors
                    x.innerHTML="An unknown error occurred.";
                }
            }
        );
    }
    else{
        //Browser does not support the geolocation API
        x.innerHTML="Geolocation is not supported by this browser.";
    }
}
//Callback function executed when positioning is successful,the position object carries the location data
function showGeolocation(position){
    //Get the page element used to display information
    const x=document.getElementById("geolocation");
    //Output latitude and longitude on the page,<br>and implement line breaks
    x.innerHTML="Latitude: "+position.coords.latitude+
        "<br>Longitude: "+position.coords.longitude;
}
