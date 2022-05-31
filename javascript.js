const loanAmount = document.getElementById("loan-amount");
const loanIntrest = document.getElementById("loan-interest");
const loanYear = document.getElementById("loan-years");

const Amount = document.getElementById("monthly-emi");
const Intrest = document.getElementById("total-interest");
const totalAmount = document.getElementById("total-pay");

// const loanAmountSlider = document.getElementById("loan-amount-slider");
// const loanIntrestSlider = document.getElementById("loan-slider");
// const loanYearSlider = document.getElementById("range__slider");


function loanAmountSlider(val) {
    loanAmount.value = val
    computeResults();
}


function loanIntrestSlider(val) {
    loanIntrest.value = val
    computeResults();
}


function loanYearSlider(val) {
    loanYear.value = val
    computeResults();
}

// const emiCalculation = () => {
// let rateofintrest = 
// }


// document.getElementById("calculate-btn").addEventListener("click", computeResults);

function computeResults(e) {



    const UIamount = loanAmount.value;
    const UIinterest = loanIntrest.value;
    const UIyears = loanYear.value;
    const principal = parseFloat(UIamount);
    const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
    const calculatedPayments = parseFloat(UIyears) * 12;

    //Compute monthly Payment

    const x = Math.pow(1 + CalculateInterest, calculatedPayments);
    const monthly = (principal * x * CalculateInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);

    //Compute Interest

    const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

    //Compute Total Payment

    const totalPayment = (monthly * calculatedPayments).toFixed(2);

    //Show results

    Amount.innerHTML = "₹ " + monthlyPayment;
    Intrest.innerHTML = "₹ " + totalInterest;
    totalAmount.innerHTML = "₹ " + totalPayment;
    // e.preventDefault();
}


// chart section
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// chart section