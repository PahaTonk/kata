var solve = files => { 
    files = files.map(item => item.match(/\.\w+$/)[0]);
    let arr1 = [];
    let arr2 = []; 
    while (files.length > 0) {
        let i = files[0]; 
        let count = 0; 
        while (files.indexOf(i) !== -1) {
            files.splice(files.indexOf(i), 1);
            ++count;
        }
        arr1.push(i);
        arr2.push(count);
    }
    let arr =[];
    let val = Math.max.apply(null, arr2);
    for (let j = arr1.length - 1; j > -1; j--) {
        if (val == arr2[j]) {
            arr.push(arr1[j])
        }
    }
    return arr;
} 

solve(['index.html','style.css','main.js','style.css','main.js','main.js','style.css']);