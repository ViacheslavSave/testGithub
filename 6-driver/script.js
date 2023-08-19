const hasLicence = true;
const age = 18;
const isDrunk = false;
const canDriveACar = Boolean(hasLicence && age >= 18 && !isDrunk);
console.log(`может ли сесть за руль : ${canDriveACar ? "может" : "нет"}`);
