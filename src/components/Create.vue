<template>
	<div class="container">
		<div class="card">
			<div class="card-header">
				Empregados
			</div>
			<div class="card-body">
				<form v-on:submit.prevent="createRegister">
					<div class="form-group">
						<label for="">Nome:</label>
						<input type="text" name="nome" id="nome" v-model="empregado.nome" class="form-control" aria-describedby="helpid" placeholder="Nome">
						<small id="helpid" class="form-text text-muted">Escrava o nome do empregado</small>
					</div>
					<div class="form-group">
						<label for="">E-mail:</label>
						<input type="text" name="email" id="email" v-model="empregado.email" class="form-control" aria-describedby="helpid" placeholder="Nome">
						<small id="helpid" class="form-text text-muted">Escreva o e-mail do empregado</small>
					</div>
					<div class="btn-group">
						<button type="submit" class="btn btn-success">Salvar</button>
						<button type="button" class="btn btn-warning">Cancelar</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>

import axios from "axios";

export default {
	data(){
		return {
			empregado:{}
		}
	},
	methods:{
		createRegister(){
			axios.post('http://localhost/empregados/api/empregados/inserir', {
				nome: this.empregado.nome,
				email: this.empregado.email
			})
			.then(function (response) {
				console.log(response);
				window.location.href = 'list'
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
	
}
</script>
