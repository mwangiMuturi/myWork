function palindrome(pal) {
    let pali = pal.toLowerCase().replace(/ /g, '');

    let x = pali.length - 1;
    let d = pali.length;
    let s = 0;
    if (d % 2 == 0) {

        for (i = x; i >= d / 2; i--) {
            console.log('kio');
            //for(s=0;s<d/2;s++){

            if (s < d / 2) {

                if (pali[i] == pali[s]) {
                    console.log(s);
                    // this.push();
                    console.log('palindrome');


                } else {

                    console.log('not this one');
                }

                s++;

                console.log('ki');
            }
        }

        //   let x = pali.length - 1;
        // let d = pali.length;
        //let s = 0;

    } else {


        for (i = x; i > x / 2; i--) {
            console.log('kio');
            //for(s=0;s<d/2;s++){

            if (s < d / 2) {

                if (pali[i] == pali[s]) {
                    console.log(s);
                    console.log('palindrome');

                } else {
                    console.log('not this one');
                }

                s++;

                console.log('kim');
            }
        }


    }

}
palindrome('asantalivedasadevilat    nasA');
console.log('gui');

//0 1 2 3  5
//b o o o  b  



function bpali(palind) {
    let palin = palind.toLowerCase().replace(/ /g, '');
    let length = palin.length;
    if (length % 2 == 0) {

        let end = palin.slice(length / 2, length);
        let end2 = end.split('').reverse().join('');

        let start = palin.slice(0, length / 2);
        if (end2 == start) {
            console.log(' even numbered palindrome');
        } else {
            console.log('bot palindrome');
        }
    } else {

        let end = palin.slice((length + 1) / 2, length)
        let end2 = end.split('').reverse().join('');

        let start = palin.slice(0, (length - 1) / 2)
        console.log(start);
        if (end2 == start) {
            console.log('odd numbered palindrome');
        } else {
            console.log('not palindrome');
        }

    }
}



bpali('boooB');