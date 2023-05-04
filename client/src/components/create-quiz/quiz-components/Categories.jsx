import '../styles/create-quiz.css';
import { useState, useEffect } from 'react';

const Categories = (props) => {

  // create state here to update which category is the selected
  const [category1, setState1] = useState(false);
  const [category2, setState2] = useState(false);
  const [category3, setState3] = useState(false);
  const [category4, setState4] = useState(false);
  const [category5, setState5] = useState(false);

  // useState function
  const onSelect = (e) => {
    e.preventDefault();

    if (e.target.name === 'category1') {
      setState1(true);
      setState2(false);
      setState3(false);
      setState4(false);
      setState5(false);
    } else if (e.target.name === 'category2') {
      setState1(false);
      setState2(true);
      setState3(false);
      setState4(false);
      setState5(false);
    } else if (e.target.name === 'category3') {
      setState1(false);
      setState2(false);
      setState3(true);
      setState4(false);
      setState5(false);
    } else if (e.target.name === 'category4') {
      setState1(false);
      setState2(false);
      setState3(false);
      setState4(true);
      setState5(false);
    } else {
      setState1(false);
      setState2(false);
      setState3(false);
      setState4(false);
      setState5(true);
    }
  }

  return (
    <div className='Categories'>
      <button name='category1' className={`category${category1 ? 'chosen' : ''}`} onClick={onSelect}> Category 1 </button>
      <button name='category2' className={`category${category2 ? 'chosen' : ''}`} onClick={onSelect}> Category 2 </button>
      <button name='category3' className={`category${category3 ? 'chosen' : ''}`} onClick={onSelect}> Category 3 </button>
      <button name='category4' className={`category${category4 ? 'chosen' : ''}`} onClick={onSelect}> Category 4 </button>
      <button name='category5' className={`category${category5 ? 'chosen' : ''}`} onClick={onSelect}> Category 5 </button>
    </div>
  );
}

export default Categories;