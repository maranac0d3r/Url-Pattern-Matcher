
function matches(pattern,url){
    if(!url || !pattern){
        return false
    }
    var patternArr = pattern.split("/")
    var urlArr = url.split("/")
    if(urlArr.length!=patternArr.length){
        return false;
    }
    for(var i=0;i<patternArr.length;i+=1){
        if((patternArr[i].indexOf(":")!=0 && patternArr[i] != urlArr[i] )){
            return false;
        }

    }
    return true;
}

module.export =  {
    matches:matches
}