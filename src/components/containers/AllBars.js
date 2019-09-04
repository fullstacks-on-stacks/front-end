import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Bars from '../bars/Bars';

import { fetchBars } from '../../actions/barsAction';
import { getAllBars } from '../../selectors/barSelector';

class AllBars extends PureComponent{
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    bars: PropTypes.array.isRequired
  }

  componentDidMount(){
    this.props.fetch();
  }

  render() {
    const { bars } = this.props;
    return (
      <Bars bars={bars} />
    );
  }
  
}

const mapStateToProps = state => ({
  bars: getAllBars(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchBars());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBars); 
