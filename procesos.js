var texto;
var adveracento="Upps, revise los acentos";
var advermayus="Upps, revise las mayusculas";
function esMinuscula(letra){
    return letra === letra.toLowerCase();
} 
function cambioDeLetras (){
    texto = document.getElementById("contenido").value;
    var texto2
            texto2=texto.replaceAll(/e/g,"enter");
            texto2=texto2.replaceAll(/i/g,"imes");
            texto2= texto2.replaceAll(/a/g,"ai");
            texto2=texto2.replaceAll(/o/g,"ober");
            texto2=texto2.replaceAll(/u/g,"ufat");
            
            
    for(var index = 0; index < texto.length; index++){
        var letraActual = texto.charAt(index);
        if((letraActual=="á")||(letraActual=="é")||(letraActual=="í")||(letraActual=="ó")||(letraActual=="ú")){
            document.getElementById("regreso").value=adveracento;
            document.getElementById("btnguardar").style.visibility="hidden";
            document.getElementById("flecha").style.visibility="hidden";
            
            break;    
        }if(esMinuscula(letraActual)){
            document.getElementById("regreso").value=texto2;
            document.getElementById("btnguardar").style.visibility="visible";
            document.getElementById("flecha").style.visibility="visible";
            
        }else{
            document.getElementById("regreso").value=advermayus;
            document.getElementById("btnguardar").style.visibility="hidden";
            document.getElementById("flecha").style.visibility="hidden";
            break; 
        }          
    } 
}
function cambioDeLetrasInverso (){
    texto = document.getElementById("contenido").value;
    var texto3
    texto3=texto.replaceAll("enter","e");
    texto3=texto3.replaceAll("imes","i");
    texto3=texto3.replaceAll("ai","a");
    texto3=texto3.replaceAll("ober","o");
    texto3=texto3.replaceAll("ufat","u");

    for(var index = 0; index < texto.length; index++){
        var letraActual = texto.charAt(index);
        if((letraActual=="á")||(letraActual=="é")||(letraActual=="í")||(letraActual=="ó")||(letraActual=="ú")){
            document.getElementById("regreso").value=adveracento;
            document.getElementById("btnguardar").style.visibility="hidden";
            document.getElementById("flecha").style.visibility="hidden";
            
            break; 
        }if(esMinuscula(letraActual)){
            
            document.getElementById("regreso").value=texto3;
            document.getElementById("btnguardar").style.visibility="visible";
            document.getElementById("flecha").style.visibility="visible";
            
        }else{
            document.getElementById("regreso").value=advermayus;
            document.getElementById("btnguardar").style.visibility="hidden";
            document.getElementById("flecha").style.visibility="hidden";
            
            break; 
        }             
    }   
}
function vacio(){
    texto="";
    document.getElementById("regreso").value=texto;
    document.getElementById("contenido").value=texto;
    document.getElementById("btnguardar").style.visibility="visible";
    document.getElementById("flecha").style.visibility="hidden";
    
}
function copiarAlPortapeles(texto) {
    
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let areaTexto = document.createElement('textarea');
    areaTexto.value = texto;
    areaTexto.setAttribute('readonly', '');
    areaTexto.style.position = 'absolute';
    areaTexto.style.left = '-9999px';

    document.body.appendChild(areaTexto);

    let seleccionado = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

    areaTexto.select();

    document.execCommand('copy');

    document.body.removeChild(areaTexto);

    if (seleccionado) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(seleccionado);
    }
}

window.onload = function() {
    document.getElementById('btnguardar').addEventListener('click', () => {
        let contenido = document.getElementById('regreso').value;

        copiarAlPortapeles(contenido);
    });
}


