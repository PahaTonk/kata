let solve = files => { 
    let set = new Set(); 
    let map = new Map(); 
    while (files.length > 0) {
        let i = files[0]; 
        let count = 0; 
        while (files.indexOf(i) !== -1) { 
            set.add(i);
            files.splice(files.indexOf(i), 1);
            ++count;
        }
        map.set(i, count);
    }
    console.log(set);
    console.log(map);
} 

solve(['index.html','style.css','main.js','style.css','main.js','style.css']);