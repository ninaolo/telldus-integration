const express = require("express");
const router = express.Router();
const OAuth = require("oauth");

const publicKey = "YOUR_PUBLIC_KEY";
const privateKey = "YOUR_PRIVATE_KEY";
const token = "YOUR_TOKEN";
const secret = "YOUR_SECRET";
const base = "https://api.telldus.com/json";

/**
 * ROUTES
 * These are the API routes which can be used by the frontend application.
 */

router.get("/devices/list", function (request, response) {
        getOauth().get(
            base + "/devices/list",
            token,
            secret,
            sendResult);
    }
);

router.get("/device/info/:id", function (request, response) {
    const id = request.params.id;

    getOauth().get(
        base + "/device/info?id=" + id,
        token,
        secret,
        sendResult);
});

router.get("/events/list", function (request, response) {
        getOauth().get(
            base + "/events/list",
            token,
            secret,
            sendResult);
    }
);

router.get("/sensors/list", function (request, response) {
        getOauth().get(
            base + "/sensors/list",
            token,
            secret,
            sendResult);
    }
);

router.get("/sensor/info/:id", function (request, response) {
        id = request.params.id;

        getOauth().get(
            base + "/sensor/info?id=" + id,
            token,
            secret,
            sendResult);
    }
);

function sendResult(error, data, res) {
    if (error) console.error(error);
    var jsonData = JSON.parse(data);
    response.send(jsonData);
}

function getOauth() {
    return new OAuth.OAuth(
        base + "/oauth/requestToken",
        base + "/oauth/accessToken",
        publicKey, privateKey, '1.0', null, 'HMAC-SHA1');
}

module.exports = router;
