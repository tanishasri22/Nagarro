
let done = document.querySelector(".done");

let input = document.querySelector("input");
let list = document.querySelector(".list");
done.addEventListener("click", function(event){
	let tag = document.createElement("li");
	tag.innerText = input.value;
	
	input.value = "";
	let a = document.createElement('button');
	a.textContent = "Delete";
	let br = document.createElement('br');
	tag.appendChild(br);
	tag.appendChild(a);
	a.addEventListener("click",function(){
		tag.remove();
	})

	list.appendChild(tag);
});