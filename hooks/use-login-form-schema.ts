import * as yup from "yup";

export const useLoginFormSchema = () => {
    return (
        yup.object().shape({
            username: yup
                .string()
                .required("Please enter your username")
                .min(6, "Username must be at least 6 characters"),
            password: yup
                .string()
                .required("Please enter your password")
                .min(6, "Password must be at least 6 characters"),
        })
    )
}