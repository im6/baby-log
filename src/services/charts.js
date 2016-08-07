import xFetch from './xFetch';

export async function getAllCharts() {
  return xFetch('/api/getAllCharts');
}
