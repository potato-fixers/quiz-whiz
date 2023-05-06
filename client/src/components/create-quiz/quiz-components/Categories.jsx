import '../styles/create-quiz.css';

const Categories = (props) => {

  return (
    <div className='Categories'>
      <button name='category1' className={`category${props.category1 ? 'chosen' : ''}`} onClick={props.select}> Category 1 </button>
      <button name='category2' className={`category${props.category2 ? 'chosen' : ''}`} onClick={props.select}> Category 2 </button>
      <button name='category3' className={`category${props.category3 ? 'chosen' : ''}`} onClick={props.select}> Category 3 </button>
      <button name='category4' className={`category${props.category4 ? 'chosen' : ''}`} onClick={props.select}> Category 4 </button>
      <button name='category5' className={`category${props.category5 ? 'chosen' : ''}`} onClick={props.select}> Category 5 </button>
    </div>
  );
}

export default Categories;