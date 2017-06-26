import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Quiz from './presenter';

function mapStateToProps(state) {
  const quiz = state.quiz;
  return {
    quiz
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onQuizProgress: bindActionCreators(actions.nextQuestion, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
