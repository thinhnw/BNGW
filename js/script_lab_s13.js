let items = [
	{
		name: "G2 Wristband",
		rate: 4.5,
		price: 7, 
		src: "images/G2/G2_Wristband.jpg"
	},
	{
		name: "G2 LoL Worlds",
		rate: 4.5,
		price: 70, 
		src: "images/G2/G2_LoL_Worlds_2020_Jersey.jpg"
	},
	{
		name: "G2 Hoodie",
		rate: 4.5,
		price: 60, 
		src: "images/G2/G2_Minimal_Hoodie_White.jpg"
	},
	{
		name: "G2 Pro Hoodie",
		rate: 4.5,
		price: 60, 
		src: "images/G2/G2_Pro_Player_Hoddie_2020.jpg"
	},
	{
		name: "G2 Mask",
		rate: 4.5,
		price: 20, 
		src: "images/G2/G2_Mask.jpg"
	},
	{
		name: "G2 Pro Jersey",
		rate: 4.5,
		price: 60, 
		src: "images/G2/G2_Pro_Player_Jersey_2020.jpg"
	},

];

function gridProduct() {
	let g_html = "";
	items.forEach((item) => {
		g_html += "<div class=\"col-4\">" +
					"<div class=\"card rounded-0\">" +
						"<div class=\"card-thumbnail\">" +
							"<img src=\"" + item.src + "\" class=\"card-img-top\">" +
						"</div>"+ 
						"<div class=\"card-body\">" +
							"<h5 class=\"card-title\">" + item.name + "</h5>" + 
							"<p class=\"card-text\">$" + item.price + "</p>"+
						"</div>"+
						"<a href=\"#\" class=\"btn btn-primary rounded-0\">ADD TO CART</a>"+ 
					"</div>"+
					"</div>";
	});
	return g_html;
}

let grid = document.getElementById("grid");
grid.innerHTML = gridProduct();
