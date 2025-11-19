function rate(id) {
    var p = prompt('Taste rating (out of 10):');
    var text = document.getElementById(String(id));
    if (p != "" && p != null) {
        p = Number(p)
        absp = Math.abs(p)
        switch (true) {
            case absp == 6.7 || absp == 67 || absp == 69 || absp == 41:
                text.innerHTML = p + '/10 -- bro...';
                break;
            case p <= 0:
                text.innerHTML = p + '/10 -- terrible';
                break;
            case p > 0 && p < 4:
                text.innerHTML = p + '/10 -- bad';
                break;
            case p >= 4 && p < 7:
                text.innerHTML = p + '/10 -- okay';
                break;
            case p >= 7 && p < 9:
                text.innerHTML = p + '/10 -- good';
                break;
            case p >= 9 && p <= 10:
                text.innerHTML = p + '/10 -- great';
                break;
            case p > 10:
                text.innerHTML = p + '/10 -- amazing';
                break;
            default:
                alert("Please provide a number.")
        }
    } else {
        alert("No rating was given.")
    }
}

function mystery() {
    alert("Are you excited to see something totally useless?")
    alert("Behold...")
    document.getElementById("dreveal").innerHTML = 'a dancing pickle :)'
    document.getElementById("reveal").innerHTML = '<img src="images/dancing_pickle.gif" alt="dancing pickle" width="300">';
}