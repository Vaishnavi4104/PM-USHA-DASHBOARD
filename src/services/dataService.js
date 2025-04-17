// src/services/dataService.js
import { infrastructureData } from '../data/infrastructureData';
import { equipmentData } from '../data/equipmentData';
import { softComponentsData } from '../data/softComponentsData';
import { financialData } from '../data/financialData';

export const getInfrastructureData = () => infrastructureData;
export const getEquipmentData = () => equipmentData;
export const getSoftComponentsData = () => softComponentsData;
export const getFinancialData = () => financialData;