const totalExpensesEl = document.querySelector(".expense-heading");
const remainingBudgetEl = document.querySelector(".ramaining-budget");
const expenseForm = document.querySelector(".add-expense");
const expenseList = [];
const addExpenseCont = document.querySelector('.error-message');
const budgetInput = document.getElementById("budgetInput");
let totalExpenses = 0;

function updateExpenses() {
    const remainingBudget = parseFloat(budgetInput.value) - totalExpenses;
    totalExpensesEl.textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;
    remainingBudgetEl.textContent = `Remaining Budget: $${remainingBudget.toFixed(2)}`;
}

expenseForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const date = document.querySelector("input[type='date']").value;
    const expenseName = document.querySelector('input[type="text"]').value;
    const expenseAmount = parseFloat(document.querySelector('input[type="number"]').value);
    const category = document.querySelector('select').value;

    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.textContent = '';
    }

    if (expenseAmount && !isNaN(expenseAmount)) {
        expenseList.push({
            date,
            expenseName,
            expenseAmount,
            category
        });

        totalExpenses += expenseAmount;
        updateExpenses();

        addToRecentTransactions(date, expenseName, expenseAmount, category);
    } else {
        addExpenseCont.textContent = "Please enter a valid expense amount";
    }

    expenseForm.reset();
});

function addToRecentTransactions(date, expenseName, expenseAmount, category) {
    const tableBody = document.getElementById('recentTransaction');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${date}</td>
        <td>${expenseName}</td>
        <td>$${expenseAmount.toFixed(2)}</td>
        <td>${category}</td>
    `;
    tableBody.appendChild(row);
}

updateExpenses();


const darkModeButton = document.getElementById('darkMode');
const body = document.body;

darkModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');  
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Light Mode'; 
    } else {
        darkModeButton.textContent = 'Dark Mode'; 
    }
});
