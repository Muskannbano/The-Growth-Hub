const validate = (schema) => async(req, res ,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        const status = 422;
        const message = "Fill the input carefully!"
        const extraDetails = err?.errors?.[0]?.message || "Invalid input data.";
        const error = {
            status,
            message,
            extraDetails
        }
        console.log(message)
        // res.status(400).json({message:message})
        next(error)
    }
}
export default validate