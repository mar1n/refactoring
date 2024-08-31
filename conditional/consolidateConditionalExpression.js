if((anEmployee.onVacation) && (anEmployee.seniority > 10)) return 1;
return 0.5;

// if(anEmployee.onVacation)
//     if(anEmployee.seniority > 10)
//         return 1;
// return 0.5;



function isNotEligableForDisablity(anEmployee) {
    if((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime)) return 0;
}
function disabilityAmount(anEmployee) {
    return isNotEligableForDisablity(anEmployee);
}
// function disabilityAmount(anEmployee) {
//     if(anEmployee.seniority < 2) return 0;
//     if(anEmployee.monthsDisabled > 12) return 0;
//     if(anEmployee.isPartTime) return 0;
// }

