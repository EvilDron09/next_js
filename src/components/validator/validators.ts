"use client"

import Joi from "joi";

export const carPostValidator = Joi.object({
    brand: Joi.string().min(3).pattern(/^[a-zA-Zа-яА-Я]/).required().messages({
        "string.pattern.base":"There should be no numbers",
        "string.min":"Minimum letters is 3"
    }),
    price: Joi.number().min(1).required().messages({
        "number":"There should be no letters",
        "number.min":"Minimum number is 1"
    }),
    year: Joi.number().min(1900).max(2026).required().messages({
        "number":"There should be no letters",
        "number.min":"Minimum number is 1900",
        "number.max":"Maximum number is 2026",
    })
})

