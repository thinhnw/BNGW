function loadData() {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			let rsText = this.responseText;
			rs = JSON.parse(rsText);
			let items = rs.data;
			console.log(items)
			let header = document.getElementById("header");
			header.children[0].innerHTML = `<h1>${items.category.name}</h1>`;
			let grid = document.getElementById("grid");
			grid.innerHTML = gridProduct(items);
		}
	}
	xhttp.open("GET","https://foodgroup.herokuapp.com/api/category/3");
    xhttp.send();
}
function gridProduct(items) {
	let g_html = "";
	items.foods.forEach((item) => {

		g_html += "<div class=\"col-4\">" +
					"<div class=\"card rounded-0\">" +
						"<div class=\"card-thumbnail\">" +
							"<img src=\"" + item.image + "\" class=\"card-img-top\">" +
						"</div>"+ 
						"<div class=\"card-body\">" +
							"<h5 class=\"card-title\">" + item.name + "</h5>" + 
							"<p class=\"card-text\">VND" + item.price + "</p>"+
						"</div>"+
						"<a href=\"#\" class=\"btn btn-primary rounded-0\">ADD TO CART</a>"+ 
					"</div>"+
				"</div>";
	});
	return g_html;
}
loadData();
