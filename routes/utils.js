const express = require('express')

const actionType = {
    RENDER: "render",
    REDIRECT: "redirect"
}

// const RENDER = "render";
// const REDIRECT = "redirect";

const handler = (req, res, result) => {
    switch (result.action) {
        case actionType.RENDER:
            res.render(result.template, { model: result.model });
            break;
        case actionType.REDIRECT:
            res.redirect(result.target);
            break;
    }
}

module.exports = { handler, actionType }