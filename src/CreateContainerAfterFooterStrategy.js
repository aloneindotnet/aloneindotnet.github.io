export default class CreateContainerAfterFooterStrategy
{
	run() {
		let container = document.body;
		let div = document.createElement('div');
		div.id = 'content';
		container.appendChild(div);
	}
}