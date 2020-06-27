const names=[
{name:'james',age:20,lvl:12,lvl2:78},
    { name:'jam', age:29, lvl:12, lvl2:78},
    { name:'lames', age:90, lvl:62, lvl2:78},
    { name:'pames', age:60, lvl:2, lvl2:78}
]

const ages=[23,43,13,12,34,76,2,98,8,10,43,65]
/*
const filtered_Ages=ages.filter(function (age) {
    if(age>=10){
       return true
    }
});
console.log(filtered_Ages);
*/
const filtered_Ages = ages.filter((age)=> (age >= 10));
console.log(filtered_Ages);

const retired=names.filter((name,lvl)=>name.age>=60 && name.lvl>=2 )
console.log(retired);

