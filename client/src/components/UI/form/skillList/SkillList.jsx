import React, { useState } from 'react'
import SkillRow from './_helper_components/SkillRow';

const SkillList = ({ }) => {
  const [rowCount, setRowCount] = useState([true]);

  const increaseRowCount = () => {
    let newRowList = [...rowCount];
    newRowList.push(true);
    setRowCount(newRowList);
  }

  const decreaseRowCount = () => {
    let newRowList = [...rowCount];
    newRowList.pop();
    setRowCount(newRowList);
  }

  return (
    <div className="c-skill-list">
      {rowCount.map((el, i) => {
        return <SkillRow index={i}/>
      })}
      <div className="skill-buttons">
        <i onClick={decreaseRowCount}>-</i>
        <i onClick={increaseRowCount}>+</i>
      </div>
    </div>
  );
};

export default SkillList;
