function run(CEP) {
    CEP = CEP.replace(/(\d{5})(\d{1,3})$/, "$1-$2"); 
    return CEP;
}