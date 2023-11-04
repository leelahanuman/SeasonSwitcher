let smallImageElement = document.getElementById("seasonSmallImage");
let mediumImageElement = document.getElementById("seasonMediumImage");
let springsmallImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springmediumImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summersmallImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summermediumImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let AutumnsmallImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let AutumnmediumImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let WintersmallImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let WintermediumImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springButton() {
    smallImageElement.src = springsmallImg;
    mediumImageElement.src = springmediumImg;
}

function summerButton() {
    smallImageElement.src = summersmallImg;
    mediumImageElement.src = summermediumImg;

}

function AutumnButton() {
    smallImageElement.src = AutumnsmallImg;
    mediumImageElement.src = AutumnmediumImg;

}

function WinterButton() {
    smallImageElement.src = WintersmallImg;
    mediumImageElement.src = WintermediumImg;


}
