function calculateSI() {
        let P = document.getElementById("principal").value;
        let R = document.getElementById("rate").value;
        let T = document.getElementById("time").value;

        if (P === "" || R === "" || T === "") {
            document.getElementById("result").innerHTML = "Please fill all fields!";
            return;
        }

        let SI = (P * R * T) / 100;

        document.getElementById("result").innerHTML =
            "Simple Interest =  " + SI;
    }