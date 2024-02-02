var teamName = document.getElementById("stepThree").innerHTML;
console.log(teamName);

const par = document.createElement("p");


for (let msg of teamName)
{
    const p = document.createElement("p");
    p.teamName.add("Broncos");
    const text = document.createTextNode(msg);
    p.appendChild(text);
}