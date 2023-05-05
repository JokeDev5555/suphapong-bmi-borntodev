function bmiProgram() {
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;
   
    let bmi = w/(h/100*h/100);
    let bmifix = (bmi.toFixed(2))

        document.getElementById("result").innerHTML = " ค่าดัชนีมวลกายของคุณคือ : " + bmifix

    if (bmifix < 18.50) {
        document.getElementById("result-cti").innerHTML = " คุณอยู่ในเกณท์ : " + " น้ำหนักน้อย / ผอม "

    } else if (bmifix < 22.90) {

        document.getElementById("result-cti").innerHTML = " คุณอยู่ในเกณท์ : " + " ปกติ ( สุขภาพดี ) "

    } else if (bmifix < 24.90) {

        document.getElementById("result-cti").innerHTML = " คุณอยู่ในเกณท์ : " + " ท้วม / โรคอ้วนระดับ 1 "

    } else if (bmifix < 29.90) {

        document.getElementById("result-cti").innerHTML = " คุณอยู่ในเกณท์ : " + " อ้วน / โรคอ้วนระดับ 2 "

    } else if (bmifix < 29.90) {

        document.getElementById("result-cti").innerHTML = " คุณอยู่ในเกณท์ : " + " อ้วนมาก / โรคอ้วนระดับ 3 "

    }
}




