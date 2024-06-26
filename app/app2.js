const d = document;
const $input = d.querySelectorAll("input[type='number']");
const $labelInput = d.querySelectorAll("label");
const $errors = d.querySelectorAll(".error");
const $dayResult = d.querySelector("#day-result");
const $monthResult = d.querySelector("#month-result");
const $yearResult = d.querySelector("#year-result");
const $form = d.querySelector("#form");
const $submit = d.querySelector("#submit");

console.log($input);

console.log($errors);
$submit.addEventListener("click", (e) => {
    e.preventDefault();
/*
    if($input.value){
        $errors.forEach(error => {
            error.classList.add("show");
        })
        $labelInput.forEach((label) => {
            label.classList.add("error");
        })
        $input.forEach((input) => {
            input.classList.add("input-error");
        })
    } 
*/
        $input.forEach((inp) => {

        if(!inp.value.match(/[0-9]/)) {
            console.error("Only numbers are allowed");
        }

        if(inp.value[0] && inp.value[1] && inp.value[2]) {
            inp.classList.remove("input-error");

            $errors.forEach(error => {
                error.classList.remove("show");
            })
            $labelInput.forEach((label) => {
                label.classList.remove("error");
            })
            calculate();
        }  

        if(!inp.value[0] || !inp.value[1] || !inp.value[2]){
            $errors.forEach(error => {
                error.classList.add("show");
            })
            $labelInput.forEach((label) => {
                label.classList.add("error");
            })
            $input.forEach((input) => {
                input.classList.add("input-error");
            })        
        }
    })
});

$form.addEventListener("keydown", (e) => { 
    if ($input[0].value.length > 0) {
        $errors[0].classList.remove("show");
        $labelInput[0].classList.remove("error");
        $input[0].classList.remove("input-error");
    }
    if ($input[1].value.length > 0) {
        $errors[1].classList.remove("show");
        $labelInput[1].classList.remove("error");
        $input[1].classList.remove("input-error");
    }
    if ($input[2].value.length > 0) {
        $errors[2].classList.remove("show");
        $labelInput[2].classList.remove("error");
        $input[2].classList.remove("input-error");
    }

        if(!$input[0].value.match(/[0-9]/)) {
        $input[0].classList.add("input-error");
        } else {
        $input[0].classList.remove("input-error");
        }

        if(!$input[1].value.match(/[0-9]/)) {
        $input[1].classList.add("input-error");
        } else {
        $input[1].classList.remove("input-error");
        }

        if(!$input[2].value.match(/[0-9]/)) {
        $input[2].classList.add("input-error");
        } else {
        $input[2].classList.remove("input-error");             
    }
})

function calculate () {
    let yearLimit = new Date().getFullYear();

    if(Number($input[2].value) <= yearLimit && Number($input[1].value) <= 11) {
        if(Number($input[1].value) === 0) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 1) {
            if(Number($input[0].value > 0 && $input[0].value <= 29)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 2) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 3) {
            if(Number($input[0].value > 0 && $input[0].value <= 30)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 4) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 5) {
            if(Number($input[0].value > 0 && $input[0].value <= 30)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 6) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 7) {
            if(Number($input[0].value > 0 && $input[0].value <= 30)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 8) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 9) {
            if(Number($input[0].value > 0 && $input[0].value <= 30)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 10) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 11) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
    } else {
        eraseResult();
    }

}

function calculateResult() {
    let pastDay = $input[0].value;
    let pastMonth = $input[1].value - 1;
    let pastYear = $input[2].value;
    let pastDate = new Date(pastYear, pastMonth, pastDay);
    let actualDate = new Date().getTime();
    let diff = actualDate - pastDate;
    let resultDays = Math.trunc(diff / (1000 * 60 * 60 * 24));
    let resultMonths = Math.trunc(resultDays/30.44);
    let resultYears = Math.trunc(resultDays / 30 /12);

    $dayResult.textContent = resultDays;
    $monthResult.textContent = resultMonths;
    $yearResult.textContent = resultYears;
}

function eraseResult() {
    $dayResult.textContent = "- -";
    $monthResult.textContent = "- -";
    $yearResult.textContent = "- -";
}