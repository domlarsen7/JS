var teamName = document.getElementById("stepThree").innerHTML;
console.log(teamName);

const par = document.createElement("p");

const tms = ["Vikings", "Packers", "Chiefs", "Broncos", "Cowboys"];

for (let tm of tms)
{
    const p = document.createElement("p");
    const text = document.createTextNode(tm);
    p.appendChild(text);
    div.appendChild(p);
}
const node = $("div");

