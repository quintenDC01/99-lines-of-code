let friends = [
    'Ramses',
    'Casper',
    'Dimitri',
    'Sven',
    'Emil'
];




let LoopNumber = 0;

loop1: 
        for (let i = 0; i < friends.length; ++i) {
            console.log(friends[i],':'); 
            Loop2: 
                for (let x = 99; x > LoopNumber; --x){
                    console.log(x, 'lines of code in the file,', x ,'lines of code; ', friends[i] ,'strikes one out, clears it all out, ' , x-1 ,'lines of code in the file'); {
                        if (LoopNumber === 0)
                        console.log(x, 'lines of code in the file,', x ,'lines of code; ', friends[i] ,'strikes one out, clears it all out, no more lines of code in the file');
                        continue;
                    }
                    }


}




