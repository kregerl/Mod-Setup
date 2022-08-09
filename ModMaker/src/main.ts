// import Start from "./Start.svelte"
// export const start = new Start({
// 	target: document.body,
// });

import App from "./App.svelte";
export interface Type {
	id: number,
	content: string
}

export const Types: Array<Type> = [
	{id: 0, content: "Setup Forge Mod"},
	{id: 1, content: "Setup Fabric Mod"},
	// {id: 2, content: "Update Mod"}
];

export const app = new App({
	target: document.body
});