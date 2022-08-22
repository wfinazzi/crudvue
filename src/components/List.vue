<template>
	<div>
		Olá List !!!
		<div v-for="empleado in empleados" :key="empleado.id">
			<div>{{empleado.id}}</div>
			<div>{{empleado.nombre}}</div>
			<div>{{empleado.correo}}</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios'

export default {
	data() {
		return {
			empleados:null,
		}
	},
	created:function(){
		this.getEmpleados();
	},
	methods:{
		getEmpleados(){
			axios
			.get('http://localhost/empleados')
			.then(response => (this.empleados = response))			
		}
	}
}
</script>
