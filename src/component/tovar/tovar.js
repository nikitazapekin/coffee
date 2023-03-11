import './tovar.css';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Fon from './fon.png';
import Pic from './pic.jpg';
import Coffee from './coffee.png';

function pokaz(item) {
  if (typeof item.name === 'string') {
    alert(item.name);
    return item.name;
  } else {
    return ' ';
  }
}
export const Tovar = (props) => {
  const { elementt, data, index } = props;
  const elem = data.filter((item) => {
    if (item.id === index) {
      return item;
    }
  });
  console.log('this is elementtt');
  console.log(elementt);
  const element = elem[0];

  const { tovarId } = useParams();

  return (
    <div>
      <div className='tovar'>
        <img src={Fon} alt='tovarImage' className='tovarImage' />
        <div className='headItems'>
          <div className='headItem'>Coffee house </div>
          <Link to='/about'>
            {' '}
            <div className='headItem'>Our Coffee</div>
          </Link>
          <div className='headItem'>For your pleasure</div>
        </div>
        <h1 className='ourr'>Our Coffee</h1>
      </div>
      <section className='aboutTovar'>
        <img src={Pic} alt='aboutTovarImage' className='aboutTovarImage' />
        <div className='aboutIt'>
          <div className='aboutItTitle'>About it</div>
          <div className='aboutItLine'>
            <hr className='aboutItLine1' />
            <img src={Coffee} alt='aboutItImage' className='aboutItImage' />
            <hr className='aboutItLine2' />
          </div>
          <div className='aboutDescrib'>
            <div className='aboutCountry'>
              <strong>
                Country:<p> {() => pokaz(element)}</p>
              </strong>
            </div>{' '}
            <br />
            <div className='aboutDescription'>
              <strong>Description:</strong>
            </div>{' '}
            <br />
            <div className='aboutPrice'>
              <strong>Price:{elementt.name}</strong>
            </div>
            <button type='button' onClick={() => pokaz(element)}>
              cliiiiick
            </button>
            <p>vfvvf</p>
          </div>
        </div>
      </section>
    </div>
  );
};
