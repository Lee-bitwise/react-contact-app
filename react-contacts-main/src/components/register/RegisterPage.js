import RegisterForm from './RegisterForm';
import styled from "styled-components";

const RegisterPage = (props) => {
    return (
        <Wrapper>
            <div className="form_wrapper">
                <RegisterForm />
                <div>
                    <p>Already have an account? <a href="/login">Login</a>.</p>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color: lightgrey;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export default RegisterPage;