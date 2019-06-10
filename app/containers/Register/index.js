import React, { useEffect, memo } from 'react';
import Container from '@material-ui/core/Container';
import RegisterStepper from 'components/RegisterStepper';
import { getState } from './selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { handleChange, registerUser } from './actions';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';

export const Register = ({ handleChange, values, registerUser }) => {
    useInjectReducer({ key: 'register', reducer });
    useInjectSaga({ key: 'register', saga });
    function registerApi() {
        console.log('<><><><>', values);
        registerUser();
    }
    return (
        <Container>
            <form>
                <RegisterStepper handleChange={handleChange} values={values} registerApi={registerApi} />
            </form>
        </Container>
)};

const mapStateToProps = createStructuredSelector({
    values: getState()
});

export function mapDispatchToProps(dispatch) {
    return {
        handleChange: name => env => dispatch(handleChange(name, env.target.value)),
        registerUser: (values) => dispatch(registerUser(values))
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(Register);
