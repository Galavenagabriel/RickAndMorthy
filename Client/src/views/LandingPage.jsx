import LoginForm from '../components/LoginForm';

export default function LandingPage (props) {

    return (
        <div>
            <LoginForm login={props.login} />
        </div>
    )

}