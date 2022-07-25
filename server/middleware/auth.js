import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        console.log(req.headers)
        const token = req.headers.authorization.split('')[1]
        let decodedData
        if (token) {
            decodedData = jwt.verify(token,'secret')
            req.userId = decodedData?.id
        }
        next();
    } catch (err) {
        console.error(err)
    }
}

export default auth