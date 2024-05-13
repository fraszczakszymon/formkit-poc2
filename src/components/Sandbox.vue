<script setup lang="ts">
import {defineComponent} from "vue";

defineComponent({
	name: 'Sandbox',
});
</script>

<template>
	<FormKit
		type="form"
		#default="{ value }"
	>
		<FormKit
			type="text"
			name="name"
			label="Name"
			help="What do people call you?"
		/>
		<FormKit
			type="checkbox"
			name="flavors"
			label="Favorite ice cream flavors"
			:options="{
				  'vanilla': 'Vanilla',
				  'chocolate': 'Chocolate',
				  'strawberry': 'Strawberry',
				  'mint-chocolate-chip': 'Mint Chocolate Chip',
				  'rocky-road': 'Rocky Road',
				  'cookie-dough': 'Cookie Dough',
				  'pistachio': 'Pistachio',
				}"
			validation="required|min:2"
		/>

		<FormKit
			type="checkbox"
			name="agree"
			label="I agree FormKit is the best form authoring framework."
		/>

		<FormKit
			type="time"
			label="Time"
			name="time"
			value="23:15"
			help="What time will go home today?"
		/>
		<pre class="font-mono text-sm p-4 bg-slate-100 mb-4">{{ value }}</pre>
	</FormKit>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
