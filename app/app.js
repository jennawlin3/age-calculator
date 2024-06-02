const d = document;
const $input = d.querySelectorAll("input[type='number']");
const $labelInput = d.querySelectorAll("label");
const $errors = d.querySelectorAll(".error");
const $dayResult = d.querySelector("#day-result");
const $monthResult = d.querySelector("#month-result");
const $yearResult = d.querySelector("#year-result");
const $form = d.querySelector("#form");
const $submit = d.querySelector("#submit");


$submit.addEventListener("click", (e) => {
    e.preventDefault();

        $input.forEach((inp) => {
        
        if($input[0].value.length === 0){
            errors();
        }
        if($input[1].value.length === 0){
            errors();
        }        
        if($input[2].value.length === 0){
            errors();
        }        

        if($input[0].value && $input[1].value && $input[2].value) {
            inp.classList.remove("input-error");

            $errors.forEach(error => {
                error.classList.remove("show");
            })
            $labelInput.forEach((label) => {
                label.classList.remove("error");
            })
            calculate();
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
})

function calculate () {
    let yearLimit = new Date().getFullYear();

    if(Number($input[2].value) <= yearLimit && Number($input[1].value) <= 12) {
        if(Number($input[1].value) === 1) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 2) {
            if(Number($input[0].value > 0 && $input[0].value <= 29)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 3) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 4) {
            if(Number($input[0].value > 0 && $input[0].value <= 30)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 5) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 6) {
            if(Number($input[0].value > 0 && $input[0].value <= 30)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 7) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 8) {
            if(Number($input[0].value > 0 && $input[0].value <= 30)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 9) {
            if(Number($input[0].value > 0 && $input[0].value <= 31)) {
                calculateResult();
            } else {
                eraseResult();
            }
        }
        if(Number($input[1].value) === 10) {
            if(Number($input[0].value > 0 && $input[0].value <= 30)) {
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
        if(Number($input[1].value) === 12) {
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
    let birthday = `${$input[2].value}/${$input[1].value}/${$input[0].value}`;
    let birthdayDate = new Date(birthday);
    let ageDiff = Date.now() -  birthdayDate;
    let ageDate = new Date(ageDiff);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();

    let pastDay = $input[0].value;
    let pastMonth = $input[1].value;
    let pastYear = $input[2].value;
    let pastDate = new Date(pastYear, pastMonth - 1, pastDay);
    let actualDate = new Date(); 
    let diff = actualDate.getTime() - pastDate.getTime();  

    console.log(actualDate.getDate() - pastDate.getDate());


    let today = new Date();
    let month = today.getMonth();
    let day = Math.abs(today.getDate() - birthdayDate.getDate());

    $monthResult.textContent = ageMonth;
    $yearResult.textContent = ageYears;
    $dayResult.textContent = day;
}

function eraseResult() {
    $dayResult.textContent = "- -";
    $monthResult.textContent = "- -";
    $yearResult.textContent = "- -";
}

function eraseResult() {
    $dayResult.textContent = "- -";
    $monthResult.textContent = "- -";
    $yearResult.textContent = "- -";
}

function errors() {
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