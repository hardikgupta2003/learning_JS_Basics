let src={
    a:10,
    b:130,
    c:150
};
// assign cloning
let dest=Object.assign({},src);

// spread cloning
let dest={...src};
console.log('source : ');
console.log(src);


// iterable cloning 

for(let key in src){
    dest[key]=src[key];
}




console.log('destination : ');
console.log(dest);
