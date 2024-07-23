import WaterConsumption from '../models/waterConsumption.js';

export const recordEconomy = (req, res) => {
  const { userId, consumption } = req.body;
  if (!userId || !consumption) {
    return res.status(400).json({ message: 'User ID e consumo são necessários' });
  }
  WaterConsumption.addConsumption(userId, consumption);
  res.status(201).json({ message: 'Consumo registrado com sucesso' });
};

export const getEconomy = (req, res) => {
  const { userId } = req.params;
  const data = WaterConsumption.getConsumptionByUser(userId);
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: 'Dados de consumo não encontrados' });
  }
};

