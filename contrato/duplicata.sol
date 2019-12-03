pragma solidity 0.5.11;

contract duplicata {
    uint public dataEmissao;
    uint public numeroFatura;
    uint public numeroOrdem;
    uint public dataVencimento;
    string public nomeVendedor;
    string public domicilioVendedor;
    address payable public carteiraCredor;
    string public nomeComprador;
    string public domicilioComprador;
    address public carteiraDevedor;
    string nomeEndossatario;
    address payable carteiraEndossatario;
    uint public valor;
    string public praca;
    bool public aOrdem;
    bool public aceite;
    bool public endosso;
    string public endossatario;
    bool public pagamento;
    bool public penhora;
    
    event emissaoDuplicata (string comprador, address devedor);
    event duplicataAceita (uint numeroDuplicata, address devedor);
    event protesto (uint numeroDocumento, string nome);
    event endossado(uint numeroDeOrdem, string novoCredor);
    event duplicataQuitada (uint numeroOrdem2);
    
    constructor (
        uint _numeroFatura,
        uint _dataVencimento,
        string memory _nomeVendedor,
        string memory _domicilioVendedor,
        string memory _nomeComprador,
        string memory _domicilioComprador,
        address _carteiraDevedor,
        uint _valor,
        string memory _praca,
        bool _aOrdem) 
        public {
        dataEmissao = now;
        numeroFatura = _numeroFatura;
        dataVencimento = _dataVencimento;
        nomeComprador = _nomeVendedor;
        domicilioVendedor = _domicilioVendedor;
        nomeComprador = _nomeComprador;
        domicilioComprador = _domicilioComprador;
        carteiraDevedor = _carteiraDevedor;
        valor = _valor;
        praca = _praca;
        carteiraCredor = msg.sender;
        aOrdem = _aOrdem;
        
        emit emissaoDuplicata (_nomeComprador, _carteiraDevedor);
    }
    
    modifier apenasCredor() {
        require(carteiraCredor == msg.sender, "Apenas Credor pode realizar esta ação");
        _;
    }
    
    modifier apenasDevedor () {
        require (carteiraDevedor == msg.sender, "Apenas Devedor pode realizar esta ação");
        _;
    }
    
    function declaraAceite(bool _aceite) public apenasDevedor{
        aceite = _aceite;
        emit duplicataAceita (numeroOrdem, msg.sender);
    }
    
    function protestoFaltaAceite() public apenasCredor {
        require(aceite == false && dataEmissao + 864000 >= now, "Aceite já dado ou dentro do prazo para aceite");
        emit protesto (numeroOrdem, nomeComprador);
    }
    
    function endossar(string memory _nomeEndossatario, address payable _carteiraEndossatario) public {
        require (aOrdem == true, "Duplicata precisa ter cláusula 'à ordem' para endosso");
        carteiraCredor = _carteiraEndossatario;
        emit endossado (numeroOrdem, _nomeEndossatario);
    }
    
    function quitarDuplicata() payable public {
        require (valor == msg.value && pagamento == false,
        "Valor do pagamento deve ser exatamente o devido e título deve estar pendente de pagamento");
        carteiraCredor.transfer(msg.value);
        emit duplicataQuitada (numeroOrdem);
    }
}
