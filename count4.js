let counterOutput = document.getElementById("counterOutput");

// 加算機能
let plusButton = document.getElementById("plusButton");
let onClickPlusButton = () => {
  if(counterOutput.value <= 39){
    counterOutput.value++;
  }
};
plusButton.addEventListener("click", onClickPlusButton);

//  減算機能
let minusButton = document.getElementById("minusButton");
let onClickMinusButton = () => {
  if(counterOutput.value >= 1){
    counterOutput.value--;
  }
};
minusButton.addEventListener("click", onClickMinusButton);

// リセット
let resetButton = document.getElementById("resetButton");
let onClickResetButton = () => {
  counterOutput.value = 0;
};
resetButton.addEventListener("click", onClickResetButton);

var hid = document.getElementById('hid');

if(counterOutput.value === 40){
   hid.remove("hid");
}
