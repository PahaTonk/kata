let solve = files => { 
    files = files.map(item => item.match(/\.\w+$/)[0]);
    let obj = {};
    while (files.length > 0) {
        let i = files[0]; 
        let count = 0;
        while (files.indexOf(i) !== -1) {
            files.splice(files.indexOf(i), 1);
            ++count;
        }
        obj[i] = count;
    }
    let val = Math.max(...Object.values(obj));
    return Object.keys(obj).filter(key => obj[key] === val).sort();
} 

solve(['index.html','style.css','masdaain.js','styasdale.css','ma213in.js','main.js','style.css']);