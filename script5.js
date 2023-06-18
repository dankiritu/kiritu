// Function to calculate PAYE (Tax)
function calculatePAYE(salary) {
  let annualSalary = salary * 12;
  let personalRelief = 28800;
  let insuranceRelief = 60000;
  let pensionContribution = 240000;
  let nhifRelief = 0;
  let housingRelief = 108000;
  let interestRelief = 300000;
  let disabilityExemption = 1800000;

  let annualTaxablePay = annualSalary - personalRelief - insuranceRelief - pensionContribution - nhifRelief - housingRelief - interestRelief - disabilityExemption;
  
  if (annualTaxablePay <= 288000) {
    return annualTaxablePay * 0.1 / 12;
  } else if (annualTaxablePay <= 388000) {
    let remainingTaxablePay = annualTaxablePay - 288000;
    let tax = (remainingTaxablePay * 0.25 + 24000) / 12;
    return tax;
  } else {
    let remainingTaxablePay = annualTaxablePay - 388000;
    let tax = (remainingTaxablePay * 0.3 + 24000 + 11083) / 12;
    return tax;
  }
}

// Function to calculate NHIF Deductions
function calculateNHIF(salary) {
  let nhifDeductions = 0;
  if (salary >= 100000) {
    nhifDeductions = 1700;
  } else if (salary >= 90000) {
    nhifDeductions = 1600;
  } else if (salary >= 80000) {
    nhifDeductions = 1500;
  } else if (salary >= 70000) {
    nhifDeductions = 1400;
  } else if (salary >= 60000) {
    nhifDeductions = 1300;
  } else if (salary >= 50000) {
    nhifDeductions = 1200;
  } else if (salary >= 45000) {
    nhifDeductions = 1100;
  } else if (salary >= 40000) {
    nhifDeductions = 1000;
  } else if (salary >= 35000) {
    nhifDeductions = 950;
  } else if (salary >= 30000) {
    nhifDeductions = 900;
  } else if (salary >= 25000) {
    nhifDeductions = 850;
  } else if (salary >= 20000) {
    nhifDeductions = 750;
  } else if (salary >= 15000) {
    nhifDeductions = 600;
  } else if (salary >= 12000) {
    nhifDeductions = 500;
  } else if (salary >= 8000) {
    nhifDeductions = 400;
  } else if (salary >= 6000) {
    nhifDeductions = 300;
  } else if (salary >= 0) {
    nhifDeductions = 150;
  }
  return nhifDeductions;
}

// Function to calculate NSSF Deductions
function calculateNSSF(salary) {
  let tier1Limit = 6000;
  let tier2Limit = 18000;
  let nssfEmployeeContribution = 0;
  let nssfEmployerContribution = 0;
  
  if (salary <= tier1Limit) {
    nssfEmployeeContribution = salary * 0.06;
    nssfEmployerContribution = salary * 0.06;
  } else if (salary <= tier2Limit) {
    nssfEmployeeContribution = tier1Limit * 0.06 + (salary - tier1Limit) * 0.06;
    nssfEmployerContribution = tier1Limit * 0.06 + (salary - tier1Limit) * 0.06;
  } else {
    nssfEmployeeContribution = tier1Limit * 0.06 + (tier2Limit - tier1Limit) * 0.06;
    nssfEmployerContribution = tier1Limit * 0.06 + (tier2Limit - tier1Limit) * 0.06;
  }

  return {
    employeeContribution: nssfEmployeeContribution,
    employerContribution: nssfEmployerContribution
  };
}

// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
  let grossSalary = basicSalary + benefits;
  let paye = calculatePAYE(grossSalary);
  let nhifDeductions = calculateNHIF(grossSalary);
  let nssfDeductions = calculateNSSF(grossSalary);
  let netSalary = grossSalary - paye - nhifDeductions - nssfDeductions.employeeContribution;
  
  return {
    grossSalary: grossSalary,
    paye: paye,
    nhifDeductions: nhifDeductions,
    nssfDeductions: nssfDeductions.employeeContribution,
    netSalary: netSalary
  };
}

// Example usage
let basicSalary = 50000;
let benefits = 10000;
let result = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary: " + result.grossSalary);
console.log("PAYE: " + result.paye);
console.log("NHIF Deductions: " + result.nhifDeductions);
console.log("NSSF Deductions: " + result.nssfDeductions);
console.log("Net Salary: " + result.netSalary);

