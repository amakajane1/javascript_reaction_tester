var start = new Date().getTime();
        function randomcolor(){
            var letters = "0123456789ABCDEF".split("");
            var color = "#";
            for(var i=0;i<6;i++){
                color += letters[Math.floor(Math.random()*16)];
            }
            return color;
        }
        function shapeappear(){
            var top = Math.random() * 400;
            var left = Math.random() * 400; 
            var width = Math.random() * 400;
            var height =( Math.random() * 200)+100;
            if(Math.random()>0.5){
                document.getElementById("shape").style.borderRadius = "50%";
            }else{
                document.getElementById("shape").style.borderRadius = "0%";
            }
            document.getElementById("shape").style.backgroundColor = randomcolor();
            document.getElementById("shape").style.height = height + "px";
            document.getElementById("shape").style.width = width + "px";
            document.getElementById("shape").style.top = top + "px";
            document.getElementById("shape").style.left = left + "px";
            document.getElementById("shape").style.display="block";
            start = new Date().getTime();
        }
        

        function delaytime(){
        setTimeout(shapeappear,Math.random()*2000);/*shape appears in random timebtw0 and 2 secomds*/
        }
        delaytime();
        document.getElementById("shape").onclick = function(){
            document.getElementById("shape").style.display = "none";
            var end = new Date().getTime();
            var timeTaken = (end - start)/1000;/*from milisecs to secs*/
            /*alert(timeTaken); this will alert it*/
            document.getElementById("timetaken").innerHTML = timeTaken + "seconds";
            /*shapeappear();iterate but this makes shape appear immediately*/
            delaytime();
        }