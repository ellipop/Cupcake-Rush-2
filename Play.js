class Play{
    constructor (){
        
    }
    start(){
     
        imageSequnce = createSprite(400,300);
        imageSequnce.addImage("first", sImg1);
        imageSequnce.addImage("second", sImg2);
        imageSequnce.addImage("third", sImg3);
        imageSequnce.addImage("fourth", sImg4);

        setTimeout(() => {
            imageSequnce.changeImage("third", sImg3);
        }, 1000);
        
        //console.log("imageSequence");
    }
}