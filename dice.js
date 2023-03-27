function func(){
            var r1 = Math.floor(Math.random() * 6) + 1;
            var r2 = Math.floor(Math.random() * 6) + 1;

            var ig1=document.getElementById("img1");
            var ig2=document.getElementById("img2");

            if (r1 == 1) ig1.src="Alea_1.png";
            else if (r1 == 2) ig1.src="Alea_2.png";
            else if (r1 == 3) ig1.src="Alea_3.png";
            else if (r1 == 4) ig1.src="Alea_4.png";
            else if (r1 == 5) ig1.src="Alea_5.png";
            else ig1.src="Alea_6.png";

            if(r2 == 1) ig2.src="Alea_1.png";
            else if (r2 == 2) ig2.src="Alea_2.png";
            else if (r2 == 3) ig2.src="Alea_3.png";
            else if (r2 == 4) ig2.src="Alea_4.png";
            else if (r2 == 5) ig2.src="Alea_5.png";
            else ig2.src="Alea_6.png";

            if(r1>r2){
                document.getElementById("heading").innerHTML="Player1 WINS";
            }
            else if(r2>r1){
                document.getElementById("heading").innerHTML="Player2 WINS";
            }
            else{
                document.getElementById("heading").innerHTML="Match Draw!";
            }
        }