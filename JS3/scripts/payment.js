window.addEventListener('load',init);
var total,count=12000;



function init(){
    total = document.querySelector('#generate');
    const pdf = new jsPDF();
    total.addEventListener('click',()=>{
        generateBill(pdf);
    });

}


function generateBill(pdf){

    pdf.text(40,30,'BILL AMOUNT :'+count);
    pdf.save();
}