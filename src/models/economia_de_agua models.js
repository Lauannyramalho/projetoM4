let waterConsumptionData = {}; 

exports.addConsumption = (userId, consumption) => {
  if (!waterConsumptionData[userId]) {
    waterConsumptionData[userId] = [];
  }
  waterConsumptionData[userId].push({ date: new Date().toISOString(), consumption });
};

exports.getConsumptionByUser = (userId) => {
  return waterConsumptionData[userId] || null;
};
