var enderecoContrato = "0x980D08492eB10D28e1534271E7Ff0252E1520d02";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

function darAceite() {
        var status = true;
        contrato.declaraAceite(status)
        .then( (transacao) => {
            console.log("Registrando Aceite ", transacao);   
            status.wait()
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
}

