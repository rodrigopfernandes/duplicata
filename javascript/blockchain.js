var enderecoContrato = "0x980D08492eB10D28e1534271E7Ff0252E1520d02";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

function dadosDuplicata() {
    var campoStatus = document.getElementById("dataDeEmissao");
    var campoStatus = document.getElementById("numeroDeOrdem");
    var campoStatus = document.getElementById("numeroDaFatura");
    var campoStatus = document.getElementById("dataDeVencimento");
    var campoStatus = document.getElementById("domicilioDoVendedor");
    var campoStatus = document.getElementById("domicilioDoComprador");
    var campoStatus = document.getElementById("valorDuplicata");
    var campoStatus = document.getElementById("pracaPagamento");
    var campoStatus = document.getElementById("clausulaOrdem");
    var campoStatus = document.getElementById("aceiteDuplicata");
    
    /*numeroFatura;
    ;
    dataVencimento;
    nomeVendedor;
    domicilioVendedor;
    carteiraCredor;
    nomeComprador;
    domicilioComprador;
    carteiraDevedor;
    nomeEndossatario;
    carteiraEndossatario;
    valor;
    praca;*/


    contrato.numeroOrdem()
    .then( (resultado) => {
        numeroDeOrdem.innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        numeroDeOrdem.innerHTML = err;
    });

    /*contrato.()
    .then( (resultado) => {
        .innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        .innerHTML = err;
    });
    
    contrato.()
    .then( (resultado) => {
        .innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        .innerHTML = err;
    });
    
    contrato.()
    .then( (resultado) => {
        .innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        .innerHTML = err;
    });

    contrato.()
    .then( (resultado) => {
        .innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        .innerHTML = err;
    });

    contrato.()
    .then( (resultado) => {
        .innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        .innerHTML = err;
    });

    contrato.()
    .then( (resultado) => {
        .innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        .innerHTML = err;
    });

    contrato.()
    .then( (resultado) => {
        .innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        .innerHTML = err;
    });

    contrato.()
    .then( (resultado) => {
        .innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        .innerHTML = err;
    });

    contrato.()
    .then( (resultado) => {
        .innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        .innerHTML = err;
    });*/
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
