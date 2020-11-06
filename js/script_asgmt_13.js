let categoriesNodes = Array.from(document.getElementsByClassName("categories"))[0];
let categories = [
	{ 
		name: "Vegetable",
		count: 15
	},
	{ 
		name: "Fresh Fruits",
		count: 12
	},
	{ 
		name: "Fresh Meat",
		count: 12
	},
	{ 
		name: "Milk & Cream",
		count: 9
	},
	{ 
		name: "Uncategorized",
		count: 7
	},
	{ 
		name: "Organic Fruits",
		count: 6
	},
	{ 
		name: "Special Salads",
		count: 3
	},
	{ 
		name: "Supplement",
		count: 0
	},
]
for (let i = 0; i < categories.length; ++i) {
	categoriesNodes.innerHTML += `<li class=\"category\"><a href=\"#\">${categories[i].name} (${categories[i].count})</a></li>`;
}
