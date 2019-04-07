function translation() {
    let en = ["one", "family", "father", "mother", "brother", "sister"];
    let vi = ["một", "gia đình", "bố", "mẹ", "anh", "chị"];
    let i;
    let inputEn = document.getElementById("English").value;
    for (i = 0; i < en.length; i++) {
        if (inputEn == en[i]) {
            en[i] = vi[i];
            document.getElementById("Vietnamese").value=vi[i];
            break;
        }else{
            document.getElementById("notresult").innerHTML="khong tim thay";
        }
    }
}

