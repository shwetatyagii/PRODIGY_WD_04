'use strict';

import {updateWeather, error404} from "./app.js";
const defaultLocation = "#/weather?lat=29.398928&lon=76.977081"

const currentLocation = function(){
    window.navigator.geolocation.getCurrentPosition(res => {
        const {latitude, longitude } = res.coords;

        updateWeather(`lat=${latitude}`, `lon=${longitude}`)
    }, err=>{
        window.location.hash = defaultLocation;
    });
}


/**
 * 
 * @param {string} query searched query
 */

const searchedLocation= query => updateWeather (...query.split("&"));

//updateWeather("lat=29.398928", "lon=76.977081")

const routes = new Map([
["/current-location", currentLocation],
["/weather", searchedLocation]
]);


const checkHash = function(){
const requestUrl = window.location.hash.slice(1);

  const [route, query] =  requestUrl.includes ? requestUrl.split("?") : [requestUrl]

  routes.get(route) ? routes.get(route)(query) : error404();

}

window.addEventListener("load", function(){
 if (!this.window.location.hash){
    window.location.hash= "#/current-location";

 }

 else{
    checkHash();
 }


})