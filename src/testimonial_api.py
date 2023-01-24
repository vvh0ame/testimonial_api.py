from requests import get

class TestimonialAPI:
	def __init__(self) -> None:
		self.api = "https://testimonialapi.toolcarton.com/"
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
		}

	def get_user(
			self,
			number: int) -> dict:
		return get(
			f"{self.api}/api/{number}",
			headers=self.headers).json()

	def get_all_users(self) -> list:
		return get(
			F"{self.api}/api",
			headers=self.headers).json()
