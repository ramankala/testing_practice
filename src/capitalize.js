function capitalize(s){

    let newString = s.charAt(0).toUpperCase() + s.slice(1);

    return newString;
}

export { capitalize };