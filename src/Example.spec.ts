import {Example} from "./Example";

test("always success", () => {
	expect(true).toBe(true);
});

test("example.name should be ny handle name", () =>{
	const instance  = new Example();

	expect(instance.name).toBe('sitri.ndxbn');
});
