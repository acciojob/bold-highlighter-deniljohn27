function highlight() {
    //Write your code here
	let data=document.getElementsByTagName("strong");
	for(let i=0;i<data.length;i++){
		data[i].className="strong_color"
	}


}


function return_normal() {
    //Write your code here
	let data=document.getElementsByTagName("strong");
	for(let i=0;i<data.length;i++){
		data[i].className="strong_normal"
	}
    
}
