const calculateTax = (income) => {
    // Example tax brackets (these will vary by country)
    const brackets = [
      { threshold: 9875, rate: 0.10 },
      { threshold: 40125, rate: 0.12 },
      { threshold: 85525, rate: 0.22 },
      { threshold: 163300, rate: 0.24 },
      { threshold: 207350, rate: 0.32 },
      { threshold: 518400, rate: 0.35 },
      { threshold: Infinity, rate: 0.37 },
    ];
  
    let tax = 0;
    let remainingIncome = income;
  
    for (let i = 0; i < brackets.length; i++) {
      const { threshold, rate } = brackets[i];
      const prevThreshold = i === 0 ? 0 : brackets[i - 1].threshold;
      const taxableIncome = Math.min(remainingIncome, threshold - prevThreshold);
      tax += taxableIncome * rate;
      remainingIncome -= taxableIncome;
  
      if (remainingIncome <= 0) break;
    }
  
    return tax;
  };
  
  module.exports = calculateTax;
  