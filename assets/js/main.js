/* 
Rifare l'esercizio della to do list come fatto assieme in classe:
stampare in pagina un item per ogni elemento contenuto in un array
ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

Strumenti:
// array;
// v-for;
// eventlistener (v-on / @);
// splice(index);
// input; 
// v-model;
// @click;
// push;
*/

// Vue.js
const app = new Vue({
	el: "#app",
	data: {
		logoImage: "https://www.boolean.careers/images/misc/logo.png",
		newTask: "",
		tasks: ["Fare i compiti", "Fare la spesa", "Fare il bucato"],
		error: false,
	},
	methods: {
		removeTask(i) {
			console.log("Cliccato su delete-task", i);
			this.tasks.splice(i, 1);
		},
		addTask() {
			console.log("Add task");
			if (this.newTask != "" && this.newTask.length > 5) {
				this.tasks.push(this.newTask);
				this.error = false;
			} else {
				this.error = true;
			}
			this.newTask = "";
		},
	},
});
// /Vue.js

