/**
 * Module: http-mock
 *
 *   The interface for this entire module that just exposes the exported
 *   functions from the other libraries.
 */

var request  = require('./mockRequest');
var response = require('./mockResponse');
var eventEmitter = require("./mockEventEmitter")

exports.createRequest = request.createRequest;
exports.createResponse= response.createResponse;
exports.createEventEmitter = function() {
    return new eventEmitter();
}