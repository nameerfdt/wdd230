const pwd = document.querySelector("#pwd");
const pwd2 = document.querySelector("#pwd2");
const pwdmessage = document.querySelector("#pwdmessage")

// event listener to check pwd and pwd2 are the same when the user click outof the pwd2 field
pwd2.addEventListener("focusout", checkSame)

function checkSame() {
    // if pwd and pwd2 values do not match
    if (pwd.value !== pwd2.value) {
        //  display message
        pwdmessage.textContent = "Password does not match previously entered password.";
        pwdmessage.style.visibility = "show";
        // color the pwd2 backgroud
		pwd2.style.backgroundColor = "linen";
        // empty out the first pwd field
        pwd.value = "";
        // empty out the pwd2 field
		pwd2.value = "";
        // focus user back to first pwd field
		pwd.focus();
	} else {
        // else don't display message and color background and text
		pwdmessage.style.display = "none";
		pwd2.style.backgroundColor = "white";
		pwd2.style.color = "black";
	}
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

range.addEventListener('change', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}