import React from 'react';
import SelectionSummaryRow from '../module/SelectionSummaryRow';

class SelectionSummary extends React.Component {
  removeItem=(index)=>{
    const {
      handleRemove
    } = this.props;
    handleRemove(index);
  }

  renderRow=(item, index)=>{
    return (
      <SelectionSummaryRow
        key={index}
        index={index}
        text={item.name}
        removeItem={this.removeItem} />
    );
  }

  render() {
    const {
      pizzaList
    } = this.props;
    const pizzaRowList = pizzaList.map(this.renderRow);
    return (
      <div className="selectionSummary">
        <h4 className="optionTitle">Added Pizza List</h4>
        {pizzaRowList}
      </div>
    );
  }
}

SelectionSummary.defaultProps = {
  pizzaList: [],
  handleRemove: ()=>{}
};

export default SelectionSummary;
