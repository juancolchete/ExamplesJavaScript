let products = [
    { barCode: 1, name: 'washing powder', brand: "Ariel", qtd: 2, price: 15.00 },
    { barCode: 2, name: 'Orange', brand: 'Tropicana', qtd: 2, price: 4.99 },
    { barCode: 3, name: 'Rice', brand: "Rakkau", qtd: 3, price: 19.90 },
    { barCode: 4, name: 'Beef', brand: "Swift", qtd: 1, price: 32.00 }
];
let total=0
let invoice = products.map(function(element,index) {
    itemTotal=element.price*products[index].qtd;
    total+=itemTotal
    return {barCode:element.barCode, name: element.name, itemTotal:itemTotal, total: total}
});
var invoiceText = ""
var invoiceLength = invoice.length
invoice.forEach((element)=>{
    invoiceText += `${element.barCode}-${element.name}= $${element.itemTotal}, `;
})
console.log(invoiceText.substring(0,invoiceText.length-2));
console.log(`Total = ${invoice[invoiceLength-1].total}`);