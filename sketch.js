console.log("!");
var database,a,pc,score,LABEL,label,label1,label2,label3,label4,textField,n,button,button1,gs,home,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10;

function preload()  {
    home=loadImage("quiz_homepage.png");
    q1=loadImage("Q1_q.png");
    q2=loadImage("Q2_q.png");
    q3=loadImage("Q3_q.jpg");
    q4=loadImage("Q3_q.jpg");
    q5=loadImage("Q5_q.jpg");
    q6=loadImage("Q6_q.jpg");
    q7=loadImage("Q7_q.png");
    q8=loadImage("Q8_q.png");
    q9=loadImage("Q9_q.jpg");
    q10=loadImage("Q10_q.jpg");
}

function setup()  {
    createCanvas(2250,1200);
    database=firebase.database();
    database.ref("gs").on("value",function(a)  { gs=a.val(); });
    database.ref("playerCount").on("value",function(a)  { pc=a.val(); });
    database.ref("score").on("value",function(a)  { score=a.val(); });
    a="";
    LABEL=createElement("h1");
    LABEL.html("STAR TREK QUIZ");
    LABEL.position(width/2-275,50);
    LABEL.style("font-size","100px");
    label=createElement("h2");
    label.position(100,270);
    label.style("font-size","50px");
    label1=createElement("h3");
    label1.position(150,395);
    label1.style("font-size","35px");
    label2=createElement("h4");
    label2.position(150,470);
    label2.style("font-size","35px");
    label3=createElement("h5");
    label3.position(150,545);
    label3.style("font-size","35px");
    label4=createElement("h6");
    label4.position(150,620);
    label4.style("font-size","35px");
    button=createButton("START");
    button.position(1200,900);
    button.size(200,50);
    //button1=createButton("Check answer");
    //button1.position(width/2,900);
    //button1.size(150,40);
    //button1.style("font-size","17px");
    button1=createSprite(width/2,900,150,40);
    button1.visible=false;
    textField=createInput(a);
    textField.position(width/2-300,900); 
    textField.size(100,40);
    textField.style("font-size","23px");
    textField.hide();
    button.hide();
}

function draw()  {
    background(255);
    if(gs==0)  {
        textField.hide();
        LABEL.position(width/2-275,50);
        image(home,width/2-150,250,600,500);
        button.show();
        //button1.hide();
        button1.visible=false;
        button.mousePressed(function() {
            gs++;
            updateGs();
        })
    }
    else  {
        LABEL.position(450,50);
        textField.show();
        button.hide();
        //button1.show();
        button1.visible=true;
        if(gs==1)   {
            image(q1,width-300,50,300,125);
            label.html("Q1) Who is the father of James T. Kirk?");
            label1.html("a) Christopher Pike");
            label2.html("b) Khan");
            label3.html("c) George Samuel");
            label4.html("d) Leonard McCoy");
            n=textField.value();
            //button1.mousePressed(checkAns(n,"c"));
            if(mouseIsOver(button1)&&mouseWentDown("leftButton"))  {
                checkAns(n,"c");
            }
        }
        else if(gs==2)   {
            image(q2,width-400,50,400,150);
            label.html("Q2) Spock (Zachary Quinto) did not agree to join this academy/society.");
            label1.html("a)	The Vulcan Science Academy");
            label2.html("b) The Vulcan Extraterrestrial Academy");
            label3.html("c)	The Diplomatic Society of Vulcan");
            label4.html("d)	The Vulcan Educational Academy");
            n=textField.value();
            //button1.mousePressed(checkAns(n,"a"));
            if(mouseIsOver(button1)&&mouseWentDown("leftButton"))  {
                checkAns(n,"a");
            }
        }
        else if(gs==3)   {
            image(q3,width-400,50,400,200);
            label.html("Q3) What effect do black holes have on bodies in the Star Trek Universe?");
            label1.html("a)	They undergo spagettification and cease to exist as they cross the event horizon.");
            label2.html("b)	They may or may not make it through and could enter in other time timeline(i.e. they can time travel)");
            label3.html("c)	They get pulled into another dimension of space");
            label4.html("d)	The effect is unknown to them.");
            n=textField.value();
            //button1.mousePressed(checkAns(n,"b"));
            if(mouseIsOver(button1)&&mouseWentDown("leftButton"))  {
                checkAns(n,"b");
            }
        }
        else if(gs==4)   {
            image(q4,width-400,50,400,200);
            label.html("Q4) Why did the Romulans go against the Federation before the destruction of their home planet as they didn’t hold any grudges before when they attacked?");
            label1.html("a)	They did not. They were Klingon and the Federation misunderstood them as Romulans.");
            label1.position(150,445);
            label2.html("b)	The fleet of Romulans had entered an alternate reality when going into the black hole. They didn’t affect the actual reality.");
            label2.position(150,520);
            label3.html("c)	A fleet of Romulans went rogue and fought to destroy the Federation.");
            label3.position(150,595);
            label4.html("d)	As they were sucked into a black hole, they entered the Universe in the past and fought against the Federation for the destruction of their home planet.");
            label4.position(150,670);
            n=textField.value();
            //button1.mousePressed(checkAns(n,"d"));
            if(mouseIsOver(button1)&&mouseWentDown("leftButton"))  {
                checkAns(n,"d");
            }
        }
        else if(gs==5)   {
            image(q5,width-400,50,400,200);
            label.html("Q5) This person saw his home planet getting destroyed twice by the Romulans.");
            label1.html("a)	Spock");
            label2.html("b) Nero");
            label3.html("c)	Scotty");
            label4.html("d)	John Harrison");
            n=textField.value();
            //button1.mousePressed(checkAns(n,"a"));
            if(mouseIsOver(button1)&&mouseWentDown("leftButton"))  {
                checkAns(n,"a");
            }
        }
        else if(gs==6)   {
            image(q6,width-400,50,400,200);
            label.html("Q6) Who is Khan?");
            label1.html("a)	He was a madman who tried to destroy the Federation for no reason whatsoever.");
            label2.html("b)	He was a super-human who had been forced into hyper sleep and he was determined to either kill the Head of Starfleet for taking away his crew or else destroy the whole Federation.");
            label3.html("c)	He was a scientist who had conducted an long-term experiment  but eventually turned against the Federation.");
            label4.html("d)	He had been stripped from his position in Starfleet and fought to take it back.");
            n=textField.value();
            //button1.mousePressed(checkAns(n,"b"));
            if(mouseIsOver(button1)&&mouseWentDown("leftButton"))  {
                checkAns(n,"b");
            }
        }
        else if(gs==7)   {
            image(q7,width-400,50,400,400); 
            label.html("Q7) What happened to Captain James T. Kirk and Khan?");
            label1.html("a)	The regenerative DNA samples were taken from Khan to save Kirk and he was put into hyper sleep.");
            label2.html("b)	Kirk had been saved by the medical staff onboard while Khan had been killed for good.");
            label3.html("c)	We do not know for sure");
            label4.html("d)	Kirk died due to radioactive poisoning while Khan had been killed by Spock as a revenge.");
            n=textField.value();
            //button1.mousePressed(checkAns(n,"a"));
            if(mouseIsOver(button1)&&mouseWentDown("leftButton"))  {
                checkAns(n,"a");
            }
        }
        else if(gs==8)   {
            image(q8,width-400,50,400,250);
            label.html("Q8) What is the difference between a Vulcan’s anatomy and a human’s?");
            label1.html("a)	Kidneys in place of our lungs");
            label2.html("b)	Intestines in place of our heart");
            label3.html("c)	Brains in place of our kidneys");
            label4.html("d)	Heart in place of our liver");
            n=textField.value();
            //button1.mousePressed(checkAns(n,"d"));
            if(mouseIsOver(button1)&&mouseWentDown("leftButton"))  {
                checkAns(n,"d");
            }
        }
        else if(gs==9)   {
            image(q9,width-400,50,400,250);
            label.html("Q9) This was the home of Jay-Lah for several years.");
            label1.html("a)	USS Enterprise");
            label2.html("b) USS Franklin");
            label3.html("c)	USS Agamemnon");
            label4.html("d) USS Adelphi");
            n=textField.value();
            //button1.mousePressed(checkAns(n,"b"));
            if(mouseIsOver(button1)&&mouseWentDown("leftButton"))  {
                checkAns(n,"b");
            }
        }
        else if(gs==10)   {
            image(q10,width-400,50,400,200);
            label.html("Q10) How did Captain Balthazar Edison get to the air circulation chamber after he had been pushed away from it by Captain Kirk and in which Starbase did this happen?");
            label1.html("a)	He took advantage of the wind blowing through the vents. It was in Starbase Icarus.");
            label1.position(150,445);
            label2.html("b)	He took advantage of the gravitational slipstream and navigated his way to the chamber. It was in Starbase Yorktown.");
            label2.position(150,520);
            label3.html("c)	He climbed his way upto the chamber as Captain Kirk was exhausted by their fight earlier. It was in Starbase Yorktown.");
            label3.position(150,595);
            label4.html("d)	He managed to push forcibly enough to reach the chamber in zero gravity. It was in Starbase Neil Armstrong.");
            label4.position(150,670);
            n=textField.value();
            //button1.mousePressed(checkAns(n,"b"));
            if(mouseIsOver(button1)&&mouseWentDown("leftButton"))  {
                checkAns(n,"b");
            }
        } 
        else if(gs==11)  {
            LABEL.position(width/2-275,50);
            if(score>30)  {
                label.html("Congratulations! You have completed the quiz!!");
                label.position(width/3,270);
            }
            else  {
                label.html("Better luck next time.");
                label.position(width/2-75,270);
            }
            textSize(45);
            fill(0);
            text("Your final score is: "+score,width/2-70,500);
            label1.hide();
            label2.hide();
            label3.hide();
            label4.hide();
            textField.hide();
            button1.visible=false;
        }
    }
    textSize(25);
    text("Score: "+score,10,30);
    drawSprites();
}

function updateGs()  {
    database.ref("/").update({gs:gs});
}

function checkAns(a,b)  {
    console.log("hbh");
    if(a==b)  {
        score+=10;
        updateScore();
    }
    gs++;
    updateGs();
}  

function updateScore()  {
    database.ref("/").update({score:score});
}