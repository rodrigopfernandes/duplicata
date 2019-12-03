var enderecoContrato = "0x980D08492eB10D28e1534271E7Ff0252E1520d02";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

function dadosDuplicata() {
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
    .then( (resultado) => {
        ordem.innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        ordem.innerHTML = err;
    });

    contrato.dataVencimento()
    .then( (resultado) => {
        vencimento.innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        vencimento.innerHTML = err;
    });
}


/*function registrarMudancaStatus() {
    var textoCampo = document.frmStatus.txtStatusPagamentoAluguel.value;
    var caixaStatusTx = document.getElementById("caixaStatusTx");
    if (textoCampo.length === 8) {
        caixaStatusTx.innerHTML = "Enviando transação...";
        contrato.mudaStatusPagamento(textoCampo)
        .then( (transacao) => {
            console.log("registrarMudancaStatus - Transacao ", transacao);   
            caixaStatusTx.innerHTML = "Transação enviada. Aguardando processamento...";
            transacao.wait()
            .then( (resultado) => {
                buscaStatusContrato();
                caixaStatusTx.innerHTML = "Transação realizada.";
            })        
            .catch( (err) => {
                console.error("registrarMudancaStatus - Aguardando tx ser minerada");
                console.error(err);
                caixaStatusTx.innerHTML = "Algo saiu errado: " + err.message;
            })
        })
        .catch( (err) => {
            console.error("registrarMudancaStatus");
            console.error(err);
            caixaStatusTx.innerHTML = "Algo saiu errado: " + err.message;
        })
    }
} */
