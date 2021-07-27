function run(CNPJ) {
    CNPJ = CNPJ.replace(/[^\d]+/g,'');
    CNPJ = CNPJ.replace(/(\d{2})(\d)/, "$1.$2");
    CNPJ = CNPJ.replace(/(\d{3})(\d)/, "$1.$2");
    CNPJ = CNPJ.replace(/(\d{3})(\d)/, "$1/$2");
    CNPJ = CNPJ.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    return CNPJ;
}