const billAmt = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const error = document.querySelector("#error-msg");
const showTable = document.querySelector("#table");

const notesArr = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", () => {
    const bill = Number(billAmt.value);
    const cash = Number(cashGiven.value);

    if (bill > 0) {
        if (bill <= cash) {
            const change = cash - bill;
            returnNotes(change);
            showTable.style.display = "block";
            error.style.display = "none";

        } else {
            showMsg("Do you wanna wash plates?");
            showTable.style.display = "none";
        }

    } else {
        showMsg("Bill amount should be a positive integer");
        showTable.style.display = "none";

    }

});



function showMsg(msg) {
    error.style.display = "block";
    error.innerText = msg;
    error.style.color = "red";
}

function returnNotes(change) {

    for (let i = 0; i < notesArr.length; i++) {
        const notesCount = Math.trunc(change / notesArr[i]);
        change %= notesArr[i];
        noOfNotes[i].innerText = notesCount;


    }

}