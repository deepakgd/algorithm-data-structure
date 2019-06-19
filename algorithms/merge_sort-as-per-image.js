let result = [], inputLength;

function mergesort(data){
    
    inputLength = data.length;

    if(inputLength === 1) return console.log(data);
    
    if(result.length === 0) splitter(data);

    console.log("-----------------")

    console.log(data.join(" "));

    console.log("-----------------")

    console.log(result)

    for(var k = 0; k < result.length; k++){
        let data = result[k];
        data = sortit(data)
    }
    
    console.log(result)
    console.log("--------------------")
    console.log(merge(result))
}

mergesort([38, 27, 43, 3, 9, 82, 10])

function splitter(data){

    let len = data.length;
    let splitIndex = Math.ceil(len/2);

    let part1 = data.slice(0, splitIndex);
    let part2 = data.slice(splitIndex);
    
    console.log(part1, part2)
    
    if(part1.length > 2) splitter(part1);
    else result.push(part1);
    if(part2.length > 2) splitter(part2);
    else result.push(part2);
    return
}




function merge(data){
    
    for(var i = 1; i < data.length; i=i+2){
        let j = i-1;
        if(data[j]){
            data[i-1] = data[j].concat(data[i]);
            delete data[i]
            data[i-1] = sortit(data[i-1]);
            console.log(data[i-1])
        }
    }

    data = data.filter(Boolean)
    
    if(data.length != 1) return merge(data);
    else return data[0];
}


function sortit(data){
    for(var i = 0; i < data.length; i++){
        
        let currentValue = data[i];
        let j = i - 1;

        while(j >= 0 && data[j] > currentValue){
            data[j+1] = data[j]
            j--;
        }

        data[j+1] = currentValue

    }

    return data;
}