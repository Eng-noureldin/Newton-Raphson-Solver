//Newton-Raphson function

function NewtonRaphson(){
    var EqStr = document.getElementById("EqStr").value;
    var initialGuessStr = document.getElementById("initial-guess").value;
    var xi = parseFloat(initialGuessStr);
    var tableBody = document.getElementById("steps-table");
    //Clean up
    tableBody.innerHTML = "";
    //first row in the table
    var initialRow = "<tr>" + 
                        "<td> 0 (Initial guess) </td>" + 
                        "<td>" + xi.toFixed(8) + "</td>" + 
                     "</tr>";
    tableBody.innerHTML += initialRow;

    if (EqStr === "" || isNaN(xi)) {
            alert('Please enter a valid equation and initial guess.');
            return false;
        }
        var f = math.parse(EqStr).compile();
        var dirf = math.derivative(EqStr , 'x').compile();
        var i =0;
        var diff = Infinity;
    while (diff > 1e-8 && i < 100)
        {
            var _xi = xi;
            var scope = { x : _xi};
            var fx = f.evaluate(scope);
            var dirfx = dirf.evaluate(scope);
        // Division by zero test
        if (dirfx === 0) {
            alert("The first derivative (denominator) equals zero!");
            break;
        }
            xi = _xi - (fx / dirfx);
            diff = math.abs(xi - _xi);
            i++;

        //New Row
        var newRow = "<tr>" + 
                        "<td>" + i + "</td>" +
                        "<td>" + xi.toFixed(8) + "</td>" + 
                     "</tr>";
        tableBody.innerHTML += newRow;
        }
    return false;
}

//Check Convergence function

function checkConvergence(){
    var EqStr = document.getElementById("EqStr").value;
    var initialGuessStr = document.getElementById("initial-guess").value;
    var f = math.parse(EqStr).compile();
    var f_der = math.derivative(EqStr , 'x').compile();
    var f_der2 = math.derivative(math.derivative(EqStr , 'x'), 'x').compile();
    var x0 = parseFloat(initialGuessStr);
    var scope = { x: x0 };
    if (EqStr === "" || isNaN(x0)) {
        alert('Please enter a valid equation and initial guess');
        return;
        }
    //Processing functions
    var fx = f.evaluate(scope);
    var fx_der = f_der.evaluate(scope);
    var fx_der2 = f_der2.evaluate(scope);
    // Division by zero test
    if(fx_der === 0){
        alert("The first derivative (denominator) equals zero!");
        }
    //Law enforcement
    var numerator = fx * fx_der2;
    var denominator = math.pow(fx_der , 2);
    var conditionValue = math.abs(numerator / denominator)
    //Display the result to the user
    var ConvergenceResult = document.getElementById("Convergence-result");
    if(conditionValue < 1)
    {
        ConvergenceResult.innerHTML = "The value is less than 1, convergence is guaranteed.";
        ConvergenceResult.setAttribute("class" , "guaranteed")
    }
    else
    {
        ConvergenceResult.innerHTML = "Value greater than or equal to 1; convergence not guaranteed";
        ConvergenceResult.setAttribute("class" , "not-guaranteed")
    }
    
}