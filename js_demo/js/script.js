function askQuestion() {
    var p = prompt('How much wood would a woodchuck chuck if a woodchuck could chuck wood?')
    text = document.getElementById('question')
    if (p != "" | null) {
        if (Number(p) > 3) {
            text.innerHTML = p + ' is a lot of wood.'
        } else if (Number(p) <= 3) {
            text.innerHTML = p + ' is not that much wood.'
        } else {
            text.innerHTML = '"' + p + '"' + ' is not a number.'
        }
    } else {
        alert("Type something.")
    }
}