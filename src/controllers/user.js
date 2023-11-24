export class User {

    static async registrationAsync(req, res){
        try {
            if (!req.body) {
                return res.status(401).json({
                    errorMessage:"Отсутсвует тело запроса"
                })
            }

            const login = req.body.login

            if(!login ) {
                return res.status(401).json({
                    errorMessage:"Отсутсвует логин"
                })
            }

            const password = req.body.password

            if(!password ) {
                return res.status(401).json({
                    errorMessage:"Отсутсвует пароль"
                })
            }
        }
        catch (err) {

        }


    }

}