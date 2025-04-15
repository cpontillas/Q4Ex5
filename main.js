function checkLight() {
	var inputLight = document.getElementById('light').value;

	switch (parseInt(inputLight)) {
	case 1:
		document.getElementById('signal').innerHTML = "Red light - STOP!";
		break;
	case 2:
		document.getElementById('signal').innerHTML = "Yellow light - CAUTION!";
		break;
	case 3:
		document.getElementById('signal').innerHTML = "Green light - GO!";
		break;
	default:
		document.getElementById('signal').innerHTML = "ERROR - Unknown color. "
	}
}