# testimonial_api.js
Web-API for [testimonialapi.toolcarton.com](https://testimonialapi.toolcarton.com) which is an API Data for testing and prototyping. [Source](https://github.com/enggsuraj/testimonailapi)

## Example
```JavaScript
async function main() {
	const { TestimonialApi } = require("./testimonial_api.js")
	const testimonialApi = new TestimonialApi()
	const allUsers = await TestimonialApi.getAllUsers()
	console.log(allUsers)
}

main()
```
