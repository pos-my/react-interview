import React from "react";


class Header extends React.Component {
    render() {
        return (
        <div className="c-header">
            <h1>
                <div style={{fontSize: '4rem'}}>🍕</div>
                Pizza Belacan!
            </h1>
            <p>{this.props.subheader}</p>
        </div>
        );
    }
}

export default Header;
