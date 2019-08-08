export const fetchItems = async () => {
	let result = await fetch(`https://jsonplaceholder.typicode.com/photos`)
	result = await result.json()
	console.log(result)
	return (result)
}