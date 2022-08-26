<template>
	<div class="container">
		<div class="card">
			<div class="card-header">
				Empregados
			</div>
			<div class="card-body">
				<table class="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Email</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="empregado in empregados" :key="empregado.id">
							<td>{{empregado.id}}</td>
							<td>{{empregado.nome}}</td>
							<td>{{empregado.email}}</td>
							<td>
								<a href="#" class="btn btn-primary" role="button">Editar</a>
								<a href="#" class="btn btn-danger" role="button">Excluir</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	
	
</template>

<script>

import axios from 'axios'

export default {
	data() {
		return {
			empregados:null,
		}
	},
	created:function(){
		this.getEmpregados();
	},
	methods:{
		getEmpregados(){
			axios
			.get('http://localhost/empregados/api/empregados/')
			.then(response => {
				this.empregados = response.data
			})			
		}
	}
}
</script>


