class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }
  execute() {
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;

    this.scoreSmoking();
    this._certificationGrade = "regular";
    if (
      this._scoringGuide.stateWithLowCertification(this._candidate.originState)
    ) {
      this._certificationGrade = "low";
      this._result -= 5;
    }
    this._result -= Math.max(this._healthLevel - 5, 0);
    return this._result;
  }
  scoreSmoking() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFlag = true;
    }
  }
}

function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}
// function score(candidate, medicalExam, scoringGuide) {
//     let result = 0;
//     let healthLevel = 0;
//     let highMedicalRiskFlag = false;

//     if(medicalExam.isSmoker) {
//         healthLevel += 10;
//         highMedicalRiskFlag = true;
//     }
//     let certificationGrade = "regular";
//     if(scoringGuide.stateWithLowCertification(candidate.originState)) {
//         certificationGrade = "low";
//         result -= 5;
//     }
//     result -= Math.max(healthLevel - 5, 0);
//     return result;
// }
