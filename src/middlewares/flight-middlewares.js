const { ClientErrorCodes } = require('../utils/error-codes')

const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price 
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            message: 'Invalid request body for create flight',
            success: false,
            err: 'Missing mandatory properties to create a flight'
        });
    }

    next();
}

module.exports = {
    validateCreateFlight
}