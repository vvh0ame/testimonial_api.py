class TestimonialApi {
	constructor() {
		this.api = "https://testimonialapi.toolcarton.com/"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
		}
	}

	async getUser(number) {
		const response = await fetch(
			`${this.api}/api/${number}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAllUsers() {
		const response = await fetch(
			`${this.api}/api` {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
 }

module.exports = {TestimonialApi}
