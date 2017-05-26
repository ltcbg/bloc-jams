 var points = document.getElementsByClassName('point');
 
 var animatePoints = function(points) {
 
     var revealPoint = function(){
       for (let i=0;i<3;i++){
         points[i].style.opacity = 1;
         points[i].style.transform = "scaleX(1) translateY(0)";
         points[i].style.msTransform = "scaleX(1) translateY(0)";
         points[i].style.WebkitTransform = "scaleX(1) translateY(0)";       
       }
     } 
     revealPoint();
 };
 
 window.onload = function() {
     window.addEventListener('scroll', function(event) {
         console.log(event);
     });
 }