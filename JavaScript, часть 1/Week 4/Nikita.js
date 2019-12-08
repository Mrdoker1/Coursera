function getCrossArray(arr1, arr2){
    let s = new Set(arr1,arr2),
        out = [];
    for(let i of s)
        if(arr1.includes(i) && arr2.includes(i))out.push(i);
    return out;
}

function getCrossArrayByArrays(...arrays){
    if(arrays.length){
        let current = arrays[0];
        for(let i=1; i<arrays.length; i++){
            current = getCrossArray(current, arrays[i]);
            if(!current.length) return [];
        }
        return current; 
    }
    return [];
}

function sortPropsByElement(element, currentProps){
    let out = [];
    for(let key in element){
        if(currentProps.includes(key)) out.push(key);
    }
    return out;
}

function accord(element, ...props){
    for(let prop of props){
        let propertys = prop.slice(1),
            property = prop[0];
        if(!element[property] || !propertys.includes(element[property]) )
            return false;
    }
    return true;
}

function accordPropertys(element, ...props){
    let out = {};
    for(let prop of props){
        if(element[prop])
            out[prop] = element[prop];
    }
    return out;
}

function selectProps(collection, ...props){
    let out = [];
    for(let value of collection){
        if(props.length)
            out.push(accordPropertys(value, ...props));
        else
            out.push(Object.assign({}, value));
    }
    return out;
}

function filter(collection, ...filters){
    let out = [];
    for(let value of collection){
        if( accord(value, ...filters) ) out.push(value);
    }
    return out;
}

function getArrayFromMap(map){
    let out = [];
    for(let [key, value] of map){
        out.push([key, ...value]);
    }
    return out;
}

function query(collection, ...operations){
    let s = new Set,
        f = new Map,
        out = [];

    for(let operation of operations){
        if(operation[0] == "select"){
            s.add(operation.slice(1));
        }else{
            if(f.has(operation[1])){
                f.get(operation[1]).add(operation.slice(2));
            } else {
                f.set(operation[1], new Set([operation.slice(2)]));
            }
        }
    }
    
    s = getCrossArrayByArrays(...s);
    s = sortPropsByElement(collection[0], s);
    for(let [key, value] of f){
        f.set(key, getCrossArrayByArrays(...value));
    }
    f = getArrayFromMap(f);

    out = filter(collection, ...f);
    out = selectProps(out, ...s);

    return out;
}

function select(...props){
    return ["select",...props];
}

function filterIn(prop, values){
    return ["filter", prop, ...values];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};