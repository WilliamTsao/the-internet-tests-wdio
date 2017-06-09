const links = {
	ABTesting: "#content > ul > li:nth-child(1) > a",
	BasicAuth: "#content > ul > li:nth-child(2) > a",
	BrokenImages: "#content > ul > li:nth-child(3) > a",
	ChallengingDOM: "#content > ul > li:nth-child(4) > a",
	Checkboxes: "#content > ul > li:nth-child(5) > a",
	ContextMenu: "#content > ul > li:nth-child(6) > a",
	DisappearingElements: "#content > ul > li:nth-child(7) > a",
	DragandDrop: "#content > ul > li:nth-child(8) > a",
	Dropdown: "#content > ul > li:nth-child(9) > a",
	DynamicContent: "#content > ul > li:nth-child(10)  > a"
	//SomethingNotThere: "#content > ul > li:nth-child(50) > a"
}
const headings = {
	welcome: ".heading",
	h2: "#content > h2"
}

module.exports = {
	links: links,
	headings: headings
}