const text2Binary = text => text.split('').map((char) => char.charCodeAt(0).toString(2)).join(" ").replace(/0/g, "я").replace(/1/g, "б");
function binary2Text(str) {
    var binString = '';
    str.replace(/б/g, "1").replace(/я/g, "0").split(' ').map(function (bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
    });
    return binString;
}

document.getElementById("decoded").addEventListener("input", () => encoded.value = text2Binary(decoded.value));
document.getElementById("encoded").addEventListener("input", () => decoded.value = binary2Text(encoded.value));
document.getElementById("copy-decoded").addEventListener("click",()=>navigator.clipboard.writeText(decoded.value));
document.getElementById("copy-encoded").addEventListener("click",()=>navigator.clipboard.writeText(encoded.value));