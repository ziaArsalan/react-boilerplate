import * as yup from 'yup';

const LoginVld = yup.object({
    email    : yup.string().email().required(),
    password : yup.string().min(8).required()
})

const SignupVld = yup.object({
    username        : yup.string().required(),
    email           : yup.string().email().required(),
    password        : yup.string().min(8).required(),
    confirmPassword : yup.string().required().test('passwords-match', 'Passwords mismatch', function(value){
                        return this.parent.password === value
                    })
})

const ForgotPasswordVld = yup.object({
    email : yup.string().email().required(),
})

const ResetPassVld = yup.object({
    password        : yup.string().min(8).required(),
    confirmPassword : yup.string().required().test('passwords-match', 'Passwords mismatch', function(value){
                        return this.parent.password === value
                    })
})

export {
    LoginVld,
    SignupVld,
    ForgotPasswordVld,
    ResetPassVld
}