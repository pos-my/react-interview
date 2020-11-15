export function isNullOrUndefined(value){
    if(value === null || value === undefined || value === "undefined" || value ==="null"){
        return true;
    }
    return false;
}