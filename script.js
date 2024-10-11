function calculateTax(){

    let monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    let category = parseFloat(document.getElementById('category').value);
    let investment = parseFloat(document.getElementById('investment').value);
    let advanceTax = parseFloat(document.getElementById('advanceTax').value);

    let totalIncome = monthlyIncome*12
    let taxFreeIncome= Math.min(totalIncome/3,450000)
    let taxableIncome= totalIncome-taxFreeIncome
    let calculatedTax= 0

    
    if (taxableIncome <= 350000) {
        calculatedTax = 0;
    } else if (taxableIncome <= 450000) {
        calculatedTax = (taxableIncome - 350000) * 0.05;
    } else if (taxableIncome <= 850000) {
        calculatedTax = 5000 + (taxableIncome - 450000) * 0.1;
    } else if (taxableIncome <= 1350000) {
        calculatedTax = 45000 + (taxableIncome - 850000) * 0.15;
    } else if (taxableIncome <= 1850000) {
        calculatedTax = 120000 + (taxableIncome - 1350000) * 0.2;
    } else if (taxableIncome > 1850000) {
        calculatedTax = 220000 + (taxableIncome - 1850000) * 0.25;
    }

    let rebatePercentage= Math.min(investment*0.15,taxableIncome*0.03,1000000)
    let totalRebate= rebatePercentage+advanceTax

    let netTaxYear= calculatedTax-totalRebate
    let netTaxMonthly=netTaxYear/12


    document.getElementById("taxFreeIncome").innerText = taxFreeIncome.toFixed();
    document.getElementById('taxableIncome').innerText = taxableIncome.toFixed();
    document.getElementById('calculatedTax').innerText = calculatedTax.toFixed();
    document.getElementById('rebate').innerText = totalRebate.toFixed();
    document.getElementById('netTaxYear').innerText = netTaxYear.toFixed();
    document.getElementById('netTaxMonthly').innerText = netTaxMonthly.toFixed();

    document.getElementById("results").classList.remove("hidden");

}







