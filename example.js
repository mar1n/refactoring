function createtype(type, audience, resultFn) {
    return {
        type,
        result: resultFn
    }
}

function resultFn(...rest) {
    return rest;
}

const amountForGreater = (audience, selledTicket, result, defaultResult) => audience > selledTicket ? result : defaultResult;
const amountForLessThan = (audience, selledTicket, result, defaultResult) => audience < selledTicket ? result : defaultResult;

const result = resultFn({ amountForGreater: (audience, selledTicket, result, defaultResult) => audience > selledTicket ? result : defaultResult });


const typeComedy = createtype("comedy", 10, amountForGreater(20, 30, 1000 * 20 -30, 40000) );
const typeTragedy = createtype("tragedy", 10, amountForGreater(20, 30, 1000 * 20 -30, 40000) );

console.log('type', type);
//console.log(result[0].amountForGreater(20, 30, 1000 * 20 -30, 40000));

//console.log(resultFn((audience, selledTicket, result, defaultResult) => audience > selledTicket ? result : defaultResult))

// observer
// state
// command
// strategy
// mediator
// factory
// decorator
// facade
// singleton