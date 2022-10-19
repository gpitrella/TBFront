import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInfo } from '../../redux/actions/homepageActions.js';

function BasicButtonExample() {
    const dispatch = useDispatch();
    const { allData } = useSelector((state) => state.homepageReducer);
    const [ fileSelect, setFileSelect ] = React.useState('All Files')

    const handleFile = (e) => {
        e.preventDefault();
        if(e.target.attributes[0].nodeValue === 'All Files') {
            dispatch(getAllInfo());
        } else {
            dispatch(getAllInfo(e.target.attributes[0].nodeValue));
        }
        setFileSelect(e.target.attributes[0].nodeValue)

    };


  return (
    <DropdownButton id="dropdown-basic-button" title={ fileSelect } variant="secondary">
        <Dropdown.Item value={'All Files'} onClick={(e) => handleFile(e)}> All Files </Dropdown.Item>
        { allData?.length > 0 && allData.slice(0,1)[0].names.map((namefile, index) => {
            return (
            <Dropdown.Item 
                key={index} 
                value={namefile} 
                onClick={(e) => handleFile(e)}> { namefile }</Dropdown.Item>)
        })}

    </DropdownButton>
  );
}

export default BasicButtonExample;