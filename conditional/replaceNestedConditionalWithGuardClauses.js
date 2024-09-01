function adjustedCapital(anInstrument) {
    if(anInstrument.capital <0 
        || anInstrument.intrestRate <= 0
        || anInstrument.duration <= 0) return 0; 
    return (anInstrument.income / anInstrument.duration) * anInstrument.adjistmentFactor;
}

// function adjustedCapital(anInstrument) {
//     let result = 0;
//     if(anInstrument.capital > 0) {
//         if(anInstrument.intrestRate> 0 && anInstrument.duration > 0) {
//             result = (anInstrumnet.income / anInstrument.duration) * anInstrument.adjistmentFactor;
//         }
//     }
//     return result;
// }



function payAmount(employee) {
  if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" };
  if (employee.isRetired) return { amount: 0, reasonCode: "RET" };
  
    lorem.ipsum(dolor.sitAmet);
    consectetur(adispiscing).elit();
    sed.do.eiusmod = tempor.incididunet.ut(labore) && dolor(magna.aliqua);
    ut.enim.ad(minim.veniam);
    return someFinalComputation();

}
// function payAmount(employee) {
//     let result;
//     if(employee.isSeparated) {
//         result = {amount: 0, reasonCode: "SEP"};
//     }
//     else {
//         if(employee.isRetired) {
//             result = {amount: 0, reasonCode: "RET"}
//         }
//         else {
//             lorem.ipsum(dolor.sitAmet);
//             consectetur(adispiscing).elit();
//             sed.do.eiusmod = tempor.incididunet.ut(labore) && dolor(magna.aliqua);
//             ut.enim.ad(minim.veniam);
//             result = someFinalComputation;
//         }
//     }
//     return result;
// }
