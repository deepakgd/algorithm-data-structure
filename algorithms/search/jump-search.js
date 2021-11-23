/**  Jump search is a search algorithm for sorted arrays. The concept is to search less elements than linear search by jumping ahead by a predetermined amount to find a block of elements where the target might be within. Once it finds the block the target is in, it’ll perform a linear search to search for the target. */


/* 

Steps to Search using Jump Search
Find a block size for the jump.
Find the block that contains the target value.
Perform Linear Search in the block the find the target.

*/



function jumpSearch(sourceData, searchItem){
    let length = sourceData.length;
    // to find jump step we are using sqrt method
    let step = Math.floor(Math.sqrt(length));
    let prevStep = null;
    console.log("length: ", length)
    console.log("step: ", step)

    while(sourceData[Math.min(step, length) - 1] < searchItem){
        // store previous step 
        /* if the next source data is greater than search item then this will be helpful to do linear search.  */
        prevStep = step; 
        step += step;
        if(prevStep >= length) return -1;
    }

    // if code comes here then you found the block
    // next you have to do linear search
    for(let i = prevStep; sourceData[i] <= searchItem; i++){
        if(sourceData[i] === searchItem) return i;
    }


    // no data found
    return -1

}
console.log(jumpSearch([10,20,30,40,50,60,70,80,90], 90))
