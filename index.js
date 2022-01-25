import { ApiPromise, WsProvider } from '@polkadot/api';

async function main () {
	const api = await ApiPromise.create({
		provider: new WsProvider('wss://rpc.polkadot.io')
	});

	api.derive.chain.bestNumber((n) => {
		const div = document.createElement('div');

		div.appendChild(document.createTextNode(n.toHuman()));
		document.getElementById("root").appendChild(div);
	});
}

main().catch(console.error);
