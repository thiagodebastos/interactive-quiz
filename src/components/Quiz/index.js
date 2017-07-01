import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Quiz from './Quiz';

function mapStateToProps(state) {
  const quiz = state.quiz;
  return { quiz };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitAnswer: bindActionCreators(actions.submitAnswer, dispatch),
    onIncrementProgress: bindActionCreators(actions.incrementProgress, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
