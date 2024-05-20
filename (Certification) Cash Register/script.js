let price = 19.5;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click", () => {
  const cashValue = parseFloat(cash.value);
  if (cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cashValue === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
  } else {
    const result = checkCashRegister(price, cashValue, cid);
    changeDue.textContent = `Status: ${result.status} ` + result.change.map(el => `${el[0]}: $${el[1]}`).join(" ");
  }
});

const UNITS = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }


function checkCashRegister(price, cash, cid) {
  let totalCID = cid.reduce((acc, el) => acc + el[1], 0).toFixed(2);
  let change = cash - price;
  const changeArray = [];
  
  if (change.toFixed(2) === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = 0;
      while (change >= UNITS[elem[0]] && elem[1] > 0) {
        temp += UNITS[elem[0]];
        elem[1] -= UNITS[elem[0]];
        change -= UNITS[elem[0]];
        change = change.toFixed(2);
      }
      if (temp > 0) {
        changeArray.push([elem[0], temp]);
      }
    }
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: changeArray};
    }
  }
}
