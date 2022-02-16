let caesarCipher = (str, key) => {
    let decipher = '';
    let re = /[a-zA-Z]/;

    function isUpperCase(str) {
        return str === str.toUpperCase();
    }
    
    //decipher each letter
    for(let i = 0; i < str.length; i++){

        if (re.test(str.charAt(i))){
            //if letter is uppercase then add uppercase letters
            if(isUpperCase(str[i])){
                decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
            }else{
            //else add lowercase letters
            decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
      }
        } else {
            decipher += str.charAt(i);
        }
      

    }
    
    
    return decipher;
  }

export { caesarCipher };