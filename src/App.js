import React from 'react';
import Table from './components/Table/Table.jsx';
import { Button } from 'react-bootstrap';
import { getAllInfo, getInfoList } from './redux/actions/homepageActions';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { errorData } = useSelector((state) => state.homepageReducer);
  const { infoList } = useSelector((state) => state.homepageReducer);
  const [ changeInfo, setChangeInfo ] = React.useState(false);

  const handleChangeInfo = (e) => {
    e.preventDefault();
    setChangeInfo(!changeInfo);
  };

  React.useEffect(() => {
    dispatch(getAllInfo());
    dispatch(getInfoList());
  }, []);

  return (
    <div className='main_container_app'>
      <div className='box_container_app'>
        <h3 className='title_app'>
          REACT TEST APP
          <Button variant={ !changeInfo ? 'danger' : 'success' } className='button_change' onClick={(e) => handleChangeInfo(e)}> { !changeInfo ? 'Original Info' : 'Table Info' } </Button>
        </h3>
        { errorData.msg 
            ? <h3> { errorData.msg } </h3>
            : !changeInfo 
                  ? <Table /> 
                  : infoList?.length > 0 && infoList.map((list, index) => {
                    return (<p key={index}>{ list }</p>)
                  })
        } 
      </div>
    </div>
  );
}

export default App;
