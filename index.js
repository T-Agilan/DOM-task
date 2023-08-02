
      function convert() {
        const a = Number(document.getElementById("input").value);
        const b = a /2.54
        document.getElementById("result").innerHTML =  b.toFixed(2) + "inches";
      }
    