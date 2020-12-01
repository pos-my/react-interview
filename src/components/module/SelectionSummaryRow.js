import React from 'react';
import FormButton from '../button/FormButton';

class SelectionSummaryRow extends React.Component {
  removeItem=()=>{
    const {
      removeItem, index
    } = this.props;
    removeItem(index);
  }

  render() {
    const {
      text
    } = this.props;
    return (
      <div className="selectionSummaryRow">
        <p className="selectionSummaryTxt">{text}</p>
        <FormButton
          title={"Remove"}
          onClick={this.removeItem} />
      </div>
    );
  }
}

SelectionSummaryRow.defaultProps = {
  text: "",
  index: -1,
  removeItem: ()=>{}
};

export default SelectionSummaryRow;
