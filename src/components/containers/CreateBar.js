import { connect } from 'react-redux';
import AddBar from '../form/AddBar';
import { addBar } from '../../actions/barsAction';



const mapDispatchToProps = dispatch => ({
  handleSubmit(e) {
    e.preventDefault();

    dispatch(addBar({
      name: e.target[0].value,
      address: e.target[1].value,
      notes: e.target[3].value
    }));
  }

});

export default connect (
  null,
  mapDispatchToProps
)(AddBar);
