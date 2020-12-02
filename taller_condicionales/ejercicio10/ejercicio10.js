alert('hola compañeros')

var cantidad
var codigo
var valor
var descuento
function procedimiento() {
    cantidad=Number(document.getElementById('cantidad').value);
    codigo=Number(document.getElementById('codigo').value);
    valor=Number(document.getElementById('valor').value);
    valorcompra=cantidad*valor
    descuento=producto(valorcompra,cantidad)
    total=valorcompra-descuento
    
    alert('el total de la compra es' + descuento)
}
function producto(valorcompra,cantidad){
    if(cantidad > 50){
        descuento=valorcompra *0.1
    }
    else {
        descuento=0
    }
    return (descuento)
}