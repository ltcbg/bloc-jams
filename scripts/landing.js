var points = document.getElementsByClassName('point');
 
var animatePoints = function(callback) {
  for (let i=0;i<3;i++){
    callback(i);
  }  
};
 
 window.onload = function() {
     if (window.innerHeight > 950) {
         //animatePoints(points,forEach);
         animatePoints(forEach);
     }
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
     window.addEventListener('scroll', function(event) {
          if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(forEach);   
         }
     });
 }
 
