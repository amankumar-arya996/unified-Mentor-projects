let transactions = [];

function addTransaction() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if (name.trim() === "" || amount.trim() === "") {
        alert("Please enter both a name and an amount.");
        return;
    }

    let transaction = {
        name: name,
        amount: parseFloat(amount)
    };

    transactions.push(transaction);
    updateUI();

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}

function updateUI() {
    let list = document.getElementById("transactionList");
    list.innerHTML = "";
    let total = 0;

    transactions.forEach((transaction, index) => {
        total += transaction.amount;
        let listItem = document.createElement("li");
        listItem.innerHTML = `${transaction.name}: ₹${transaction.amount} <button class="delete" onclick="deleteTransaction(${index})">X</button>`;
        list.appendChild(listItem);
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}

document.getElementById("addBtn").addEventListener("click", addTransaction);
