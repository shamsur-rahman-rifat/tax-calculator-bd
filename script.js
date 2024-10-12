function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateTax(){

    let monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    let category = parseFloat(document.getElementById('category').value);
    let advanceTax = parseFloat(document.getElementById('advanceTax').value);
    let children = parseInt(document.getElementById("children").value);
    
    const childAdjustment = children * 50000;
    let zeroTaxLimit = category + childAdjustment;

    let totalIncome = monthlyIncome*12

    let taxFreeIncome= Math.min(totalIncome/3,450000)
    let taxableIncome= totalIncome-taxFreeIncome
    let calculatedTax= 0
    
    if (taxableIncome <= zeroTaxLimit) {
        calculatedTax = 0;
    } else if (taxableIncome <= zeroTaxLimit+100000) {
        calculatedTax = (taxableIncome - (zeroTaxLimit+100000)) * 0.05;
    } else if (taxableIncome <= zeroTaxLimit+500000) {
        calculatedTax = 5000 + (taxableIncome - (zeroTaxLimit+500000)) * 0.1;
    } else if (taxableIncome <= zeroTaxLimit+1000000) {
        calculatedTax = 45000 + (taxableIncome - (zeroTaxLimit+1000000)) * 0.15;
    } else if (taxableIncome <= zeroTaxLimit+1500000) {
        calculatedTax = 120000 + (taxableIncome - (zeroTaxLimit+1500000)) * 0.2;
    } else if (taxableIncome > zeroTaxLimit+1500000) {
        calculatedTax = 220000 + (taxableIncome - (zeroTaxLimit+1500000)) * 0.25;
    }

    const shanchay=Math.min(parseFloat(document.getElementById('shanchay').value),500000)
    const dps = Math.min(parseFloat(document.getElementById("dps").value), 120000);
    const mutualFund = parseFloat(document.getElementById("mutual-fund").value);
    const treasuryBond = parseFloat(document.getElementById("treasury-bond").value);
    const stock = parseFloat(document.getElementById("stock").value);
    const providentEmployee = parseFloat(document.getElementById("provident-employee").value);
    const providentEmployer = parseFloat(document.getElementById("provident-employer").value);
    const providentInterest = parseFloat(document.getElementById("provident-interest").value);

    const investment = shanchay + dps + mutualFund + treasuryBond + stock +
    providentEmployee + providentEmployer + providentInterest;

    let rebatePercentage= Math.min(investment*0.15,taxableIncome*0.03,1000000)
    let totalRebate= rebatePercentage+advanceTax

    let netTaxYear = calculatedTax - totalRebate;
    if (netTaxYear < 0) {
        netTaxYear = 0; // Prevent negative tax
    }

    let netTaxMonthly=netTaxYear/12


    document.getElementById('taxFreeIncome').textContent = formatNumberWithCommas(taxFreeIncome);
    document.getElementById('taxableIncome').textContent = formatNumberWithCommas(taxableIncome);
    document.getElementById('zeroTaxLimit').textContent = formatNumberWithCommas(zeroTaxLimit);
    document.getElementById('rebate').textContent = formatNumberWithCommas(totalRebate)
    document.getElementById('netTaxYear').textContent = formatNumberWithCommas(netTaxYear);
    document.getElementById('netTaxMonthly').textContent = formatNumberWithCommas(netTaxMonthly.toFixed()); // Limit to 2 decimal places


    document.getElementById("results").classList.remove("hidden");
}







