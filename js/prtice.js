const array = [2, 4, 55, 44, 33, 1, 5, 0, 9, 8, 7, 6, 555, 444, 333];

console.log(array);
array.sort(function(a,b){
    return a-b;
})
console.log(array);

const arrayBook=[
    'book javascript hablo programmer',
    'A Smarter Way to Learn JavaScript.',
    'JavaScript: The Definitive Guide.',
    'Head First JavaScript Programming: A Brain-Friendly Guide.',
    'Eloquent JavaScript, 3rd Edition.',
    'The Principles of Object-Oriented JavaScript.',
    'The Good Parts.'

];

const search ='javascript';

const update=[];
for(const array of arrayBook){
    if (array.toLocaleUpperCase().indexOf(search.toLocaleUpperCase()) !=-1){
        update.push(array);
    }
}
console.log(update);
