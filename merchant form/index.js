document
  .getElementById("MerchantForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const form  = event.target;
    const formData = new FormData(form)
    for(let x of formData.entries()){
console.log(x[0] + ":" + x[1]);
    }
  });

