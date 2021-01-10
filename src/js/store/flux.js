const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: null,
			full_name: "",
			email: "",
			agenda_slug: "piterscl",
			address: "",
			phone: "",
			deleteId: ""
		},
		actions: {
			//(Arrow) Functions that update the Store
			handleChange: e => {
				setStore({ [e.target.name]: e.target.value });
			},
			// Remember to use the scope: scope.state.store & scope.setState()
			contactosAgenda: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/piterscl", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},
			contactosNuevos: () => {
				const store = getStore();

				const contact = {
					full_name: store.full_name,
					email: store.email,
					agenda_slug: store.agenda_slug,
					address: store.adress,
					phone: store.phone
				};

				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						getActions().contactosAgenda();
						setStore({
							full_name: "",
							email: "",
							agenda_slug: "piterscl",
							address: "",
							phone: ""
						});
					})
					.catch(error => console.log(error));
			},
			getElementId: id => {
				setStore({ deleteId: id });
			},
			borrarContacto: () => {
				const store = getStore();
				fetch(`https://assets.breatheco.de/apis/fake/contact/${store.deleteId}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => getActions().contactosAgenda())
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
