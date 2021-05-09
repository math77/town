import React from 'react';

import '@fortawesome/fontawesome-free/js/all.js';

import './accordion.scss';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      expanded: false,
      height: 0,
    };
    
    this.toggleCardState = this.toggleCardState.bind(this);
  }
  
  toggleCardState(e) {
    const test = this.content.clientHeight;

    console.log("HIII");
    console.log(test);
    
    this.setState({
      "expanded": !this.state.expanded
    });
  }
  
  render() {
    const {title, children, color} = this.props;
    const {expanded} = this.state;
    
    return(
      <div className="column is-half">
        <div 
          className={ "card " + (expanded ? "expanded" : "not-expanded") + " is-shadowless" }
        >
          <header className="card-header is-shadowless" onClick={this.toggleCardState}>
            <p className="is-size-3 card-header-title" style={{ color: '#ffffff' }}>
              {title}
            </p>
            <p className="card-header-icon">
              <span className="icon">
                <i className="fas fa-angle-up" style={{ color: color,  fontSize: '1.8rem'}}></i>
              </span>
            </p>
          </header>
          <div className="card-content" style={{ maxHeight: this.state.height }} ref={(content) => this.content = content }>
            <div className="content" style={{ color: '#ffffff' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;