const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
2
const btn = document.querySelector("#btn");
3
4
5
const getFacts = async () => {

console.log("getting data.....");

let response = await fetch(URL);

console.log(response); //JSON format

let data = await response.json();
factPara.innerText = data[1].text;

};

btn.addEventListener("click", getFacts);
