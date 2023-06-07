console.log('heyyyy');

let rectangle={
    lenght:1,
    breadth: 2,

    draw : function(){
        console.log('this is the function of drawing');
    }
}

console.log(rectangle.draw());




function CreateRectangle(len,bre){
    
    return rectangle = {
        lenght:len,
        breadth:bre,
        
        draw(){
            console.log('drawing rectangle');
        }
        
    };
}

let rectObj=CreateRectangle(5,7);
