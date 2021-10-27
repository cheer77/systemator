function percentCalculate(){
    const percentBtns = document.querySelectorAll(".subscription-btn--js");
    const tarifPrice = document.querySelectorAll(".subscribtion-price-count--js");

   

    function handlerActiveBtn(sortBtn) {
        const sortBtns = sortBtn.parentElement.children;

        for (let i = 0; i < sortBtns.length; i++) {
            if (sortBtns[i].classList.contains('subscription-tariffs__item-active')) {
                sortBtns[i].classList.remove('subscription-tariffs__item-active');
            }
        }
    }

    function calculate(percent){
        tarifPrice.forEach(price =>{
            const priceData = +price.getAttribute('data-pacege');
            

            const result = Math.abs(priceData -(priceData * `.${percent}`)).toFixed(1);
            price.textContent = result;
            
        })
    }

    percentBtns.forEach(btn => {
        const percentData = +btn.getAttribute('data-percent');
        btn.addEventListener("click", () => {
            calculate(percentData);            
            handlerActiveBtn(btn);
            btn.classList.add('subscription-tariffs__item-active');
        })
        

        
    })
}
percentCalculate();

function mobileTable(){
    const tableBtns = document.querySelectorAll('.subscription-table__btn--js');
    const tableData = document.querySelectorAll('.table-data--js');

    function dataCheck(tableContent){
        tableBtns.forEach(btn => {
            btn.addEventListener('click', ()=> {
                const btnData = btn.getAttribute('data-target');

                const contentData = tableContent.getAttribute('data-content');
                
                if (!btnData === contentData){
                    tableContent.style.display = 'none';
                } else{
                    tableContent.style.display = 'table';
                }
            })
       })
    }
    tableData.forEach(data => dataCheck(data))
}   
mobileTable();