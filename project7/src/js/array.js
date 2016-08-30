//Array.js
        var sampleArray=['cat','dog','monkey']; //[] or newArray();
//To display
        console.log(sampleArray[1]);
//will display dog coz filename and array index will display that
        sampleArray[3]='donkey';
//will add donkey in 3rd index
        console.log(sampleArray);
        console.log('length of array ->'+sampleArray.length);
//will give you the length of sample array
        sampleArray.push('chimp');
        for(var i=0;i<sampleArray.length;i++){
            document.write(i+" ) "+sampleArray[i]+"<br>");
        }
//will display it again ......
traverseArray(sampleArray);