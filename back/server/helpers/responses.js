
const errorResponse = ({res, error, code = 200} = {}) => {
    const response = {
        error,
        code,
        success: false
    }
    return res.status(code).json(response);
}

const successResponse = ({res, data, code = 200} = {}) => {
    const response = {
        data,
        code,
        success: true
    }
    return res.status(code).json(response);
}

module.exports = {
    errorResponse,
    successResponse,
}