import { useState } from 'react';

const useSort = (initialData) => {

  const [ sortConfig, setSortConfig ] = useState({key: null, direction: 'asc'});

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = initialData.slice().sort((a, b) => {
    if (sortConfig.key !== null) {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      // number sorting strategy
      if (!isNaN(valueA) && typeof !isNaN(valueB)) {
        return sortConfig.direction === 'asc' ? valueA - valueB : valueB - valueA;
      }

      // string sorting strategy
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortConfig.direction === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      // date sorting strategy
      if (valueA instanceof Date && valueB instanceof Date) {
        return sortConfig.direction === 'asc' ? valueA - valueB : valueB - valueA;
      }
    }

    return 0;

  });

  return {
    sortedData,
    sortData
  }
};

export default useSort;