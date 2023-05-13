import { useState } from 'react';

const useFilter = (initialData) => {

  const [filter, setFilter] = useState({name: '', category: ''});

  const handleFilterChange = (name, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value
    }));
  };

  const filteredData = initialData.filter(quiz =>
    quiz.quiz_name.toLowerCase().includes(filter.name) &&
    quiz.category.toLowerCase().includes(filter.category)
  );

  return {
    filter,
    filteredData,
    handleFilterChange
  }
};

export default useFilter;