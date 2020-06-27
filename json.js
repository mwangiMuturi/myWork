const peoplez = [

    {
        name: 'james',
        age: 29
    },
    {
        name: 'baskin',
        age: 45
    },
    {
        name: 'joe',
        age: 34
    }
]

let p = document.getElementById('peoplez')

function herFunction(ite, index) {
    console.log(index + ':' + ite.name);
    let u = index + ':' + ite.name
    p.innerHTML += u
}


var t = JSON.stringify(peoplez)
console.log(t);
//herFunction()
//let p = document.getElementById('peoplez')
p.style.backgroundColor = 'red'

for (i = 0; i < peoplez.length; i++) {

    p.innerHTML += `<li>${peoplez[i].name}:${peoplez[i].age}</li>`
}

//peoplez.forEach(herFunction)
//p.innerHTML = h

let input=document.getElementById('roman')
input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
       converter();
    }
});





let resultz = document.getElementById('result');

let btn = document.getElementById('btn');

btn.addEventListener('click',converter )





    function converter(){
    let num =  document.getElementById('roman').value

       var reg=new RegExp(/^\d+$/);
      //  var reg = new RegExp('^\\d+$');

        console.log(reg.test(num));

if (reg.test(num)==true){
    console.log('think twice');




console.log(typeof num);

    //et num = 199
    let minHun
    if (num >= 100) {
        minHun = num % 100
    } else {
        minHun = num
    }
    console.log(minHun);



    let x = minHun % 10
    console.log(x);
    let ans
    switch (x) {
        case 1:
            console.log('i');
            ans = 'I'
            break;
        case 2:
            console.log('i');
            ans = 'II'
            break;

        case 3:
            console.log('i');
            ans = 'III'
            break;

        case 4:
            console.log('IV');
            ans = 'IV'
            break;

        case 5:
            console.log('v');
            ans = 'V'
            break;

        case 6:
            console.log('vi');
            ans = 'VI'
            break;

        case 7:
            console.log('vii');
            ans = 'VII'
            break;

        case 8:
            console.log('viii');
            ans = 'VIII'
            break;

        case 9:
            console.log('ix');
            ans = 'IX'
            break;



        default:
            ans = ''
            break;
    }
    console.log(ans);
    console.log(x);


    let mod = minHun % 10;
    let tenz
    let tens = (minHun - mod) / 10

    switch (tens) {
        case 1:
            tenz = 'X'
            break;

        case 1:
            tenz = 'X'
            break;

        case 2:
            tenz = 'XX'
            break;

        case 3:
            tenz = 'XXX'
            break;

        case 4:
            tenz = 'XL'
            break;

        case 5:
            tenz = 'L'
            break;

        case 6:
            tenz = 'LX'
            break;

        case 7:
            tenz = 'LXX'
            break;

        case 8:
            tenz = 'LXXX'
            break;

        case 9:
            tenz = 'XC'
            break;

        default:
            tenz = ''
            break;
    }
    console.log(tenz);

    let modi = num % 100;
    let hundredz
    let hundreds = (num - modi) / 100
    //console.log(hundredz);

    switch (hundreds) {
        case 1:
            hundredz = 'C'
            break;

        case 2:
            hundredz = 'CC'
            break;

        case 3:
            hundredz = 'CCC'
            break;

        case 4:
            hundredz = 'CD'
            break;

        case 5:
            hundredz = 'D'
            break;

        case 6:
            hundredz = 'DC'
            break;
        case 7:
            hundredz = 'DCC'
            break;

        case 8:
            hundredz = 'DCCC'
            break;

        case 9:
            hundredz = 'CM'
            break;


        default:
            hundredz = ''
            break;
    }
    console.log(hundredz);
    let result = hundredz + tenz + ans
    console.log(result);
       resultz.innerText = result;

    if (num>1000||num<1) {
        resultz.innerHTML = 'Out of range'

    }
        }

        else if(num==''){
                resultz.innerHTML='enter a No.'
            }
           
            else{
            


                console.log('you thought');
                resultz.innerHTML = 'no decimal , no char';
                //   resultz.style.backgroundColor = 'red'
                console.log(num);

            }
          
        }








