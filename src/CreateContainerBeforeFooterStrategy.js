export default class CreateContainerBeforeFooterStrategy
{
	run() {
		let footer = document.getElementById("footer");
		let div = document.createElement('div');
		div.id = 'content';
		document.body.insertBefore(div, footer);
	}
}