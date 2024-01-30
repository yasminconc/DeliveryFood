const BASE_URL = 'https://delivery-food-back.vercel.app'

export class UserRequest {
    USER_LOGIN = () => {
        return {
            url: `${BASE_URL}/login`
        }
    }

    USER_SIGNUP = () => {
        return {
            url: `${BASE_URL}/signup`
        }
    }
}