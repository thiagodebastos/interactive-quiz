import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actionCreators';
import Quiz from '../components/Quiz';

function mapStateToProps(state) {
  const quiz = state.quiz;
  return { quiz };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitAnswer: bindActionCreators(actions.submitAnswer, dispatch),
    onIncrementProgress: bindActionCreators(
      actions.incrementProgress,
      dispatch
    ),
    onIncrementScore: bindActionCreators(actions.incrementScore, dispatch),
    onQuizComplete: bindActionCreators(actions.submitQuiz, dispatch),
    onQuizReset: bindActionCreators(actions.resetQuiz, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
