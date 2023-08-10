document.getElementById("download1").download = "QR.png"
document.getElementById("download2").download = "QR.png"
document.getElementById('range1').value = 200;
document.getElementById('range2').value = 200;
let range1 = document.getElementById('range1').value;
let range2 = document.getElementById('range2').value;
let iconcrs;

let tubtrg = 0;


function jenerate() {

	if (document.getElementById('input1').value.length == 0) {
		document.getElementById("alert1").innerHTML = '文字が入力されていません'
		return;
	}

	document.getElementById("alert1").innerHTML = ''

	let canvas = document.getElementById('canvas1');
	let input = document.getElementById('input1').value;
	let code = document.getElementById('code1').value;
	let back = document.getElementById('back1').value;

	const options = {
		color: {
		   dark: code,
		  light: back
		},
		width: range1
	};
	const QRCode = require('qrcode');
	QRCode.toCanvas(canvas, input, options)

	document.getElementById("download1").style.display ="block";

	format();
}
document.getElementById("jenerate").onclick = jenerate;

function format() {
	let format = document.getElementById("format1").value;

	if (format == 'png') {
		document.getElementById("download1").download = "QR.png"
		canvas = document.getElementById('canvas1');
		base64 = canvas.toDataURL("image/png");
		document.getElementById("download1").href = base64;
	} else if (format == 'jpeg') {
		document.getElementById("download1").download = "QR.jpeg"
		canvas = document.getElementById('canvas1');
		base64 = canvas.toDataURL("image/jpeg");
		document.getElementById("download1").href = base64;
	} else if (format == 'svg') {
		document.getElementById("download1").download = "QR.svg"
		canvas = document.getElementById('canvas1');
		base64 = canvas.toDataURL("image/svg");
		document.getElementById("download1").href = base64;
	} else if (format == 'eps') {
		document.getElementById("download1").download = "QR.eps"
		canvas = document.getElementById('canvas1');
		base64 = canvas.toDataURL("image/eps");
		document.getElementById("download1").href = base64;
	}
}
document.getElementById("format1").onchange = format;


function puticon () {
	if (document.getElementById('input2').value.length == 0) {
		document.getElementById("alert2").innerHTML = '文字が入力されていません'
		return;
	} else if (document.getElementById('input2').value.length == 1 && /^[a-zA-Z0-9!-/:-@¥ [-`{-~]*$/.test(document.getElementById('input2').value)) {
		document.getElementById("alert2").innerHTML = '半角2文字以上を入力してください'
		return;
	}
	document.getElementById("alert2").innerHTML = ''
	
	let canvas = document.getElementById('canvas2');
	let input = document.getElementById('input2').value;
	let code = document.getElementById('code2').value;
	let back = document.getElementById('back2').value;

	const options = {
		color: {
		   dark: code,
		  light: back,
		  errorCorrectionLevel: 'H'
		},
		width: range2
	};


	const QRCode = require('qrcode');
	QRCode.toCanvas(canvas, input, options, (error) => {
		const icon = new Image();
		// icon.crossOrigin = "anonymous";     
		icon.onload = ()=>{
			const left = Math.floor((canvas.width - icon.width) / 2);    // x
			const top  = Math.floor((canvas.height - icon.height) / 2);  // y

			// 画像を載せる
			const ctx = canvas.getContext('2d');
			ctx.drawImage(icon, left, top);

			console.log(`<img src="${canvas.toDataURL()}" />`);

		};
		icon.src = './Unknown.png';  // 上に載せる画像	
	});

	document.getElementById("download2").style.display ="block";

	formatdesign()
}
document.getElementById("icon").onclick = puticon;

function formatdesign() {
	let format = document.getElementById("format2").value;

	if (format == 'png') {
		document.getElementById("download2").download = "QR.png"
		canvas = document.getElementById('canvas2');
		base64 = canvas.toDataURL("image/png");
		document.getElementById("download2").href = base64;
	} else if (format == 'jpeg') {
		document.getElementById("download2").download = "QR.jpeg"
		canvas = document.getElementById('canvas2');
		base64 = canvas.toDataURL("image/jpeg");
		document.getElementById("download2").href = base64;
	}
}
document.getElementById("format2").onchange = formatdesign;


// tub menu
function tub1 () {
	tubtrg = 1;
	tubchange()
}
document.getElementById('tub1').onclick = tub1;

function tub2() {
	tubtrg = 2;
	tubchange()
}
document.getElementById('tub2').onclick = tub2;

function tubchange() {
	let tub1 = document.getElementById("tub1");
	let tub2 = document.getElementById("tub2");
	let menu1 = document.getElementById("menu1");
	let menu2 = document.getElementById("menu2");

	if (tubtrg == 1 && tub1.classList.contains("tub-unactive")) {
		tub2.classList.add("tub-unactive");
		tub2.classList.remove("tub");
		tub1.classList.add("tub");
		tub1.classList.remove("tub-unactive");

		menu1.classList.add("activemenu");
		menu1.classList.remove("unactivemenu");
		menu2.classList.add("unactivemenu");
		menu2.classList.remove("activemenu");
	}

	if (tubtrg == 2 &&tub2.classList.contains('tub-unactive')) {
		tub1.classList.add("tub-unactive");
		tub1.classList.remove("tub");
		tub2.classList.add("tub");
		tub2.classList.remove("tub-unactive");

		menu2.classList.add("activemenu");
		menu2.classList.remove("unactivemenu");
		menu1.classList.add("unactivemenu");
		menu1.classList.remove("activemenu");
	
	}
}


function rangeeee1() {
	range1 = document.getElementById('range1').value;
	document.getElementById('rangeres1').innerHTML = range1 + 'px';
}
document.getElementById('range1').onchange = rangeeee1;

function rangeeee2() {
	range2 = document.getElementById('range2').value;
	document.getElementById('rangeres2').innerHTML = range2 + 'px';
}
document.getElementById('range2').onchange = rangeeee2;

rangeeee1();
rangeeee2();