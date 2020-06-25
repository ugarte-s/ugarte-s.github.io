var clickCountBA = 1;
var clickCountJT = 1;
var clickCountJI = 1;
var clickCountJB = 1;
var clickCountJK = 1;
var clickCountSS = 1;
var clickCountYO = 1;
var clickCountBT = 1;

const colorBA = document.getElementById('ID-BA');
const listBA = document.getElementsByClassName('regionList')[4];
const colorBoxBA = document.getElementsByClassName('region')[4];
const colorJT = document.getElementById('ID-JT');
const listJT = document.getElementsByClassName('regionList')[5];
const colorBoxJT = document.getElementsByClassName('region')[5];
const colorJI = document.getElementById('ID-JI');
const listJI = document.getElementsByClassName('regionList')[3];
const colorBoxJI = document.getElementsByClassName('region')[3];
const colorJB = document.getElementById('ID-JB');
const listJB = document.getElementsByClassName('regionList')[2];
const colorBoxJB = document.getElementsByClassName('region')[2];
const colorJK = document.getElementById('ID-JK');
const listJK = document.getElementsByClassName('regionList')[0];
const colorBoxJK = document.getElementsByClassName('region')[0];
const colorSS = document.getElementById('ID-SS');
const listSS = document.getElementsByClassName('regionList')[7];
const colorBoxSS = document.getElementsByClassName('region')[7];
const colorYO = document.getElementById('ID-YO');
const listYO = document.getElementsByClassName('regionList')[6];
const colorBoxYO = document.getElementsByClassName('region')[6];
const colorBT = document.getElementById('ID-BT');
const listBT = document.getElementsByClassName('regionList')[1];
const colorBoxBT = document.getElementsByClassName('region')[1];

// Select Bali
function clickBA() {
	clickCountBA += 1;
	if (clickCountBA % 2) {
		colorBA.style.fill = 'rgb(85,0,140)';
		colorBoxBA.style.backgroundColor = 'rgb(22,227,242)';
		listBA.style.display = 'none';
	} else {
			colorJT.style.fill = 'rgb(85,0,140)'; listJT.style.display = 'none'; clickCountJT = 1; colorBoxJT.style.backgroundColor = 'rgb(22,227,242)';
			colorJI.style.fill = 'rgb(85,0,140)'; listJI.style.display = 'none'; clickCountJI = 1; colorBoxJI.style.backgroundColor = 'rgb(22,227,242)';
			colorJB.style.fill = 'rgb(85,0,140)'; listJB.style.display = 'none'; clickCountJB = 1; colorBoxJB.style.backgroundColor = 'rgb(22,227,242)';
			colorJK.style.fill = 'rgb(85,0,140)'; listJK.style.display = 'none'; clickCountJK = 1; colorBoxJK.style.backgroundColor = 'rgb(22,227,242)';
			colorSS.style.fill = 'rgb(85,0,140)'; listSS.style.display = 'none'; clickCountSS = 1; colorBoxSS.style.backgroundColor = 'rgb(22,227,242)';
			colorYO.style.fill = 'rgb(85,0,140)'; listYO.style.display = 'none'; clickCountYO = 1; colorBoxYO.style.backgroundColor = 'rgb(22,227,242)';
			colorBT.style.fill = 'rgb(85,0,140)'; listBT.style.display = 'none'; clickCountBT = 1; colorBoxBT.style.backgroundColor = 'rgb(22,227,242)';
			colorBA.style.fill = 'rgb(255,0,204)';
			listBA.style.display = 'block';
			colorBoxBA.style.backgroundColor = 'rgb(255,0,204)';
	}
}

// Select Central Java
function clickJT() {
	clickCountJT += 1;
	if (clickCountJT % 2) {
		colorJT.style.fill = 'rgb(85,0,140)';
		colorBoxJT.style.backgroundColor = 'rgb(22,227,242)';
		listJT.style.display = 'none';
	} else {
			colorBA.style.fill = 'rgb(85,0,140)'; listBA.style.display = 'none'; clickCountBA = 1; colorBoxBA.style.backgroundColor = 'rgb(22,227,242)';
			colorJI.style.fill = 'rgb(85,0,140)'; listJI.style.display = 'none'; clickCountJI = 1; colorBoxJI.style.backgroundColor = 'rgb(22,227,242)';
			colorJB.style.fill = 'rgb(85,0,140)'; listJB.style.display = 'none'; clickCountJB = 1; colorBoxJB.style.backgroundColor = 'rgb(22,227,242)';
			colorJK.style.fill = 'rgb(85,0,140)'; listJK.style.display = 'none'; clickCountJK = 1; colorBoxJK.style.backgroundColor = 'rgb(22,227,242)';
			colorSS.style.fill = 'rgb(85,0,140)'; listSS.style.display = 'none'; clickCountSS = 1; colorBoxSS.style.backgroundColor = 'rgb(22,227,242)';
			colorYO.style.fill = 'rgb(85,0,140)'; listYO.style.display = 'none'; clickCountYO = 1; colorBoxYO.style.backgroundColor = 'rgb(22,227,242)';
			colorBT.style.fill = 'rgb(85,0,140)'; listBT.style.display = 'none'; clickCountBT = 1; colorBoxBT.style.backgroundColor = 'rgb(22,227,242)';
			colorJT.style.fill = 'rgb(255,0,204)';
			listJT.style.display = 'block';
			colorBoxJT.style.backgroundColor = 'rgb(255,0,204)';
	}
}

// Select East Java
function clickJI() {
	clickCountJI += 1;
	if (clickCountJI % 2) {
		colorJI.style.fill = 'rgb(85,0,140)';
		colorBoxJI.style.backgroundColor = 'rgb(22,227,242)';
		listJI.style.display = 'none';
	} else {
			colorBA.style.fill = 'rgb(85,0,140)'; listBA.style.display = 'none'; clickCountBA = 1; colorBoxBA.style.backgroundColor = 'rgb(22,227,242)';
			colorJT.style.fill = 'rgb(85,0,140)'; listJT.style.display = 'none'; clickCountJT = 1; colorBoxJT.style.backgroundColor = 'rgb(22,227,242)';
			colorJB.style.fill = 'rgb(85,0,140)'; listJB.style.display = 'none'; clickCountJB = 1; colorBoxJB.style.backgroundColor = 'rgb(22,227,242)';
			colorJK.style.fill = 'rgb(85,0,140)'; listJK.style.display = 'none'; clickCountJK = 1; colorBoxJK.style.backgroundColor = 'rgb(22,227,242)';
			colorSS.style.fill = 'rgb(85,0,140)'; listSS.style.display = 'none'; clickCountSS = 1; colorBoxSS.style.backgroundColor = 'rgb(22,227,242)';
			colorYO.style.fill = 'rgb(85,0,140)'; listYO.style.display = 'none'; clickCountYO = 1; colorBoxYO.style.backgroundColor = 'rgb(22,227,242)';
			colorBT.style.fill = 'rgb(85,0,140)'; listBT.style.display = 'none'; clickCountBT = 1; colorBoxBT.style.backgroundColor = 'rgb(22,227,242)';
			colorJI.style.fill = 'rgb(255,0,204)';
			listJI.style.display = 'block';
			colorBoxJI.style.backgroundColor = 'rgb(255,0,204)';
	}
}

// Select West Java
function clickJB() {
	clickCountJB += 1;
	if (clickCountJB % 2) {
		colorJB.style.fill = 'rgb(85,0,140)';
		colorBoxJB.style.backgroundColor = 'rgb(22,227,242)';
		listJB.style.display = 'none';
	} else {
			colorBA.style.fill = 'rgb(85,0,140)'; listBA.style.display = 'none'; clickCountBA = 1; colorBoxBA.style.backgroundColor = 'rgb(22,227,242)';
			colorJT.style.fill = 'rgb(85,0,140)'; listJT.style.display = 'none'; clickCountJT = 1; colorBoxJT.style.backgroundColor = 'rgb(22,227,242)';
			colorJI.style.fill = 'rgb(85,0,140)'; listJI.style.display = 'none'; clickCountJI = 1; colorBoxJI.style.backgroundColor = 'rgb(22,227,242)';
			colorJK.style.fill = 'rgb(85,0,140)'; listJK.style.display = 'none'; clickCountJK = 1; colorBoxJK.style.backgroundColor = 'rgb(22,227,242)';
			colorSS.style.fill = 'rgb(85,0,140)'; listSS.style.display = 'none'; clickCountSS = 1; colorBoxSS.style.backgroundColor = 'rgb(22,227,242)';
			colorYO.style.fill = 'rgb(85,0,140)'; listYO.style.display = 'none'; clickCountYO = 1; colorBoxYO.style.backgroundColor = 'rgb(22,227,242)';
			colorBT.style.fill = 'rgb(85,0,140)'; listBT.style.display = 'none'; clickCountBT = 1; colorBoxBT.style.backgroundColor = 'rgb(22,227,242)';
			colorJB.style.fill = 'rgb(255,0,204)';
			listJB.style.display = 'block';
			colorBoxJB.style.backgroundColor = 'rgb(255,0,204)';
	}
}

// Select Jakarta
function clickJK() {
	clickCountJK += 1;
	if (clickCountJK % 2) {
		colorJK.style.fill = 'rgb(85,0,140)';
		colorBoxJK.style.backgroundColor = 'rgb(22,227,242)';
		listJK.style.display = 'none';
	} else {
			colorBA.style.fill = 'rgb(85,0,140)'; listBA.style.display = 'none'; clickCountBA = 1; colorBoxBA.style.backgroundColor = 'rgb(22,227,242)';
			colorJT.style.fill = 'rgb(85,0,140)'; listJT.style.display = 'none'; clickCountJT = 1; colorBoxJT.style.backgroundColor = 'rgb(22,227,242)';
			colorJI.style.fill = 'rgb(85,0,140)'; listJI.style.display = 'none'; clickCountJI = 1; colorBoxJI.style.backgroundColor = 'rgb(22,227,242)';
			colorJB.style.fill = 'rgb(85,0,140)'; listJB.style.display = 'none'; clickCountJB = 1; colorBoxJB.style.backgroundColor = 'rgb(22,227,242)';
			colorSS.style.fill = 'rgb(85,0,140)'; listSS.style.display = 'none'; clickCountSS = 1; colorBoxSS.style.backgroundColor = 'rgb(22,227,242)';
			colorYO.style.fill = 'rgb(85,0,140)'; listYO.style.display = 'none'; clickCountYO = 1; colorBoxYO.style.backgroundColor = 'rgb(22,227,242)';
			colorBT.style.fill = 'rgb(85,0,140)'; listBT.style.display = 'none'; clickCountBT = 1; colorBoxBT.style.backgroundColor = 'rgb(22,227,242)';
			colorJK.style.fill = 'rgb(255,0,204)';
			listJK.style.display = 'block';
			colorBoxJK.style.backgroundColor = 'rgb(255,0,204)';
	}
}

// Select South Sumatra
function clickSS() {
	clickCountSS += 1;
	if (clickCountSS % 2) {
		colorSS.style.fill = 'rgb(85,0,140)';
		colorBoxSS.style.backgroundColor = 'rgb(22,227,242)';
		listSS.style.display = 'none';
	} else {
			colorBA.style.fill = 'rgb(85,0,140)'; listBA.style.display = 'none'; clickCountBA = 1; colorBoxBA.style.backgroundColor = 'rgb(22,227,242)';
			colorJT.style.fill = 'rgb(85,0,140)'; listJT.style.display = 'none'; clickCountJT = 1; colorBoxJT.style.backgroundColor = 'rgb(22,227,242)';
			colorJI.style.fill = 'rgb(85,0,140)'; listJI.style.display = 'none'; clickCountJI = 1; colorBoxJI.style.backgroundColor = 'rgb(22,227,242)';
			colorJB.style.fill = 'rgb(85,0,140)'; listJB.style.display = 'none'; clickCountJB = 1; colorBoxJB.style.backgroundColor = 'rgb(22,227,242)';
			colorJK.style.fill = 'rgb(85,0,140)'; listJK.style.display = 'none'; clickCountJK = 1; colorBoxJK.style.backgroundColor = 'rgb(22,227,242)';
			colorYO.style.fill = 'rgb(85,0,140)'; listYO.style.display = 'none'; clickCountYO = 1; colorBoxYO.style.backgroundColor = 'rgb(22,227,242)';
			colorBT.style.fill = 'rgb(85,0,140)'; listBT.style.display = 'none'; clickCountBT = 1; colorBoxBT.style.backgroundColor = 'rgb(22,227,242)';
			colorSS.style.fill = 'rgb(255,0,204)';
			listSS.style.display = 'block';
			colorBoxSS.style.backgroundColor = 'rgb(255,0,204)';
	}
}

// Select Yogyakarta
function clickYO() {
	clickCountYO += 1;
	if (clickCountYO % 2) {
		colorYO.style.fill = 'rgb(85,0,140)';
		colorBoxYO.style.backgroundColor = 'rgb(22,227,242)';
		listYO.style.display = 'none';
	} else {
			colorBA.style.fill = 'rgb(85,0,140)'; listBA.style.display = 'none'; clickCountBA = 1; colorBoxBA.style.backgroundColor = 'rgb(22,227,242)';
			colorJT.style.fill = 'rgb(85,0,140)'; listJT.style.display = 'none'; clickCountJT = 1; colorBoxJT.style.backgroundColor = 'rgb(22,227,242)';
			colorJI.style.fill = 'rgb(85,0,140)'; listJI.style.display = 'none'; clickCountJI = 1; colorBoxJI.style.backgroundColor = 'rgb(22,227,242)';
			colorJB.style.fill = 'rgb(85,0,140)'; listJB.style.display = 'none'; clickCountJB = 1; colorBoxJB.style.backgroundColor = 'rgb(22,227,242)';
			colorJK.style.fill = 'rgb(85,0,140)'; listJK.style.display = 'none'; clickCountJK = 1; colorBoxJK.style.backgroundColor = 'rgb(22,227,242)';
			colorSS.style.fill = 'rgb(85,0,140)'; listSS.style.display = 'none'; clickCountSS = 1; colorBoxSS.style.backgroundColor = 'rgb(22,227,242)';
			colorBT.style.fill = 'rgb(85,0,140)'; listBT.style.display = 'none'; clickCountBT = 1; colorBoxBT.style.backgroundColor = 'rgb(22,227,242)';
			colorYO.style.fill = 'rgb(255,0,204)';
			listYO.style.display = 'block';
			colorBoxYO.style.backgroundColor = 'rgb(255,0,204)';
	}
}

// Select Banten
function clickBT() {
	clickCountBT += 1;
	if (clickCountBT % 2) {
		colorBT.style.fill = 'rgb(85,0,140)';
		colorBoxBT.style.backgroundColor = 'rgb(22,227,242)';
		listBT.style.display = 'none';
	} else {
			colorBA.style.fill = 'rgb(85,0,140)'; listBA.style.display = 'none'; clickCountBA = 1; colorBoxBA.style.backgroundColor = 'rgb(22,227,242)';
			colorJT.style.fill = 'rgb(85,0,140)'; listJT.style.display = 'none'; clickCountJT = 1; colorBoxJT.style.backgroundColor = 'rgb(22,227,242)';
			colorJI.style.fill = 'rgb(85,0,140)'; listJI.style.display = 'none'; clickCountJI = 1; colorBoxJI.style.backgroundColor = 'rgb(22,227,242)';
			colorJB.style.fill = 'rgb(85,0,140)'; listJB.style.display = 'none'; clickCountJB = 1; colorBoxJB.style.backgroundColor = 'rgb(22,227,242)';
			colorJK.style.fill = 'rgb(85,0,140)'; listJK.style.display = 'none'; clickCountJK = 1; colorBoxJK.style.backgroundColor = 'rgb(22,227,242)';
			colorSS.style.fill = 'rgb(85,0,140)'; listSS.style.display = 'none'; clickCountSS = 1; colorBoxSS.style.backgroundColor = 'rgb(22,227,242)';
			colorYO.style.fill = 'rgb(85,0,140)'; listYO.style.display = 'none'; clickCountYO = 1; colorBoxYO.style.backgroundColor = 'rgb(22,227,242)';
			colorBT.style.fill = 'rgb(255,0,204)';
			listBT.style.display = 'block';
			colorBoxBT.style.backgroundColor = 'rgb(255,0,204)';
	}
}

// Overlay Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
