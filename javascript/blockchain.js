var enderecoContrato = "0x980D08492eB10D28e1534271E7Ff0252E1520d02";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

function dadosDuplicata() {
    var status;
    var emissao = document.getElementById("dataDeEmissao");
    var ordem = document.getElementById("numeroDeOrdem");
    var fatura = document.getElementById("numeroDaFatura");
    var vencimento = document.getElementById("dataDeVencimento");
    var cidadadeVendedor = document.getElementById("domicilioDoVendedor");
    var cidadeComprador = document.getElementById("domicilioDoComprador");
    var preco = document.getElementById("valorDuplicata");
    var cidadePagamento = document.getElementById("pracaPagamento");
    var clausula = document.getElementById("clausulaOrdem");
    var aceiteDocumento = document.getElementById("aceiteDuplicata");
        
    contrato.numeroOrdem()
    .then( (numeroOrdem) => {
        ordem.innerHTML = numeroOrdem;
    })
    .catch( (err) => {
        console.error(err);
        ordem.innerHTML = err;
    });

    contrato.dataVencimento()
    .then( (dataVencimento) => {
        vencimento.innerHTML = dataVencimento;
    })
    .catch( (err) => {
        console.error(err);
        vencimento.innerHTML = err;
    });
}


function darAceite() {
        var status = "true";
        contrato.declaraAceite(status)
        .then( (aceite) => {
            console.log("Registrando Aceite ", aceite);   
            status.wait()
            .then( (aceite) => {
                declaraAceite(status);                
            })        
            .catch( (err) => {
                console.error("Aguardando aceite ser minerada");
                console.error(err);
            })
        })
        .catch( (err) => {
            console.error("registrarAceite");
            console.error(err);
        })
}


