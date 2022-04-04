function systemRegister(strArr) {
	class System {
		constructor(name, componentName, subcomponentName) {
			this.info = {
				system: name,
				components: [[componentName, [subcomponentName]]],
			};
		}
	}

	let systems = [];

	for (let strSequence of strArr) {
		let [name, componentName, subcomponentName] = strSequence.split(' | ');
		let newSystem = true;
		let newComponent = true;

		if (systems.length > 0) {
			for (let sysObj of systems) {
				if (sysObj.info.system === name) {
					for (let componentArr of sysObj.info.components) {
						if (componentArr.includes(componentName)) {
							componentArr[1].push(subcomponentName);
							newComponent = false;
						}
					}

					if (newComponent) {
						sysObj.info.components.push([
							componentName,
							[subcomponentName],
						]);
					}
					newSystem = false;
				}
			}

			if (newSystem) {
				systems.push(new System(name, componentName, subcomponentName));
			}
		} else {
			systems.push(new System(name, componentName, subcomponentName));
		}
	}

	systems
		.sort((sys1, sys2) => {
			let componentsA = sys1.info.components;
			let componentsB = sys2.info.components;
			return (
				componentsB.length - componentsA.length ||
				sys1.info.system.localeCompare(sys2.info.system)
			);
		})
		.forEach((sysObj) => {
			sysObj.info.components.sort((arr1, arr2) => {
				return arr2[1].length - arr1[1].length;
			});

			let info = sysObj.info;
			console.log(info.system);

			for (let [componentName, subcomponentArr] of info.components) {
				console.log(`|||${componentName}`);
				for (let subcomponentName of subcomponentArr) {
					console.log(`||||||${subcomponentName}`);
				}
			}
		});
}

systemRegister([
	'SULS | Main Site | Home Page',
	'SULS | Main Site | Login Page',
	'SULS | Main Site | Register Page',
	'SULS | Judge Site | Login Page',
	'SULS | Judge Site | Submittion Page',
	'Lambda | CoreA | A23',
	'SULS | Digital Site | Login Page',
	'Lambda | CoreB | B24',
	'Lambda | CoreA | A24',
	'Lambda | CoreA | A25',
	'Lambda | CoreC | C4',
	'Indice | Session | Default Storage',
	'Indice | Session | Default Security',
]);

systemRegister([
	'Shift | Section-A | A-2',
	'Shift | Section-A | A-3',
	'Shift | Section-A | A-23',
	'Shift | Section-B | B-1',
	'Shift | Section-B | B-64',
	'Shift | Section-B | B-56',
	'Shit | Anex | Indie',
	'Shit | Bider | Indie',
]);
