<template>
  <div class="home">
    <h1>list of users</h1>
      <div>
      <table class="table">
	<thead>
		<tr>
      <th>namber</th>
			<th>User name</th>		
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
      <td v-on:click="userPage">Admin</td>
		</tr>
    <tr>
			<td>2</td>
      <td v-on:click="userPage">Joe</td>
		</tr>
    <tr>
			<td>3</td>
      <td v-on:click="userPage">Helen</td>
		</tr>    
		...
	</tbody>
</table>
        <button>add user</button>        
        </div>
        <!-- <input type="text" placeholder="Enter name"/>       -->
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
.table {
  margin: auto;
	margin-bottom: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse; 
}
.table th {
	font-weight: bold;
	padding: 5px;
	background: #efefef;
	border: 1px solid #dddddd;
}
.table td {
  cursor: pointer;
	border: 1px solid #dddddd;
	padding: 5px;
}
</style>