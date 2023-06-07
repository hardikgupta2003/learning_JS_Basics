let person={
    fName:'hardik',
    LName:'gupta',
    
    get fullname(){
        return `${person.fName} ${person.LName}`
    },
    
    set fullName(value){
        let parts=value.split(' ');
        this.fName=parts[0];
        this.LName=parts[1];
    }
};

// console.log(person.fName);

try{
    person.fullname=1;
}
catch(e){
    alert('you have sent a interger');
}



console.log(person.fullname);
