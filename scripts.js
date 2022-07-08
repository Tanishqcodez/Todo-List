let text = document.getElementById('input-text').value;

let str = ``
let AppendDiv = document.getElementById("append")

setInterval(()=>{
    text = document.getElementById('input-text')
},100)
let index = 0;

// Function to save todo's

function check() {
    if (localStorage.getItem("saved") == null) {
        localStorage.setItem("saved", true)
    }else{
        str = localStorage.getItem("todo")
        index = localStorage.getItem("index")
        AppendDiv.innerHTML = str;
    }
}
check();

function add() {
    ++index;
    localStorage.setItem("index", index);
    str += `
    <div class="bg-gray-200 py-2 mt-2">
        <h1> <span class="mr-2">${index}.</span>${text.value}</h1>
    </div>
    `

    AppendDiv.innerHTML = str;
    localStorage.setItem("todo", str)
}
function del() {
    str = ""
    index = 0;
    AppendDiv.innerHTML = str;
    localStorage.clear();
}