import FormSignIn from "@/components/FormSignIn";
import styles from "./signin.module.scss";
import { cn } from "@/lib/utils";
import { formSignInSchema } from "@/utils/validations/schemas";
import { z } from "zod";

const SignIn: React.FC = () => {

    const { 'form-signin': formSignin, 
        'container-signin': containerSignin,
        'container-logo': containerLogo 
    } = styles;
        
    const handleOnAction = (values: z.infer<typeof formSignInSchema>) => {
        // Tratar os dados, passando para um hook de requisição
        console.log('valores: ', values);
    };

    return (
        <div
            className={cn(containerSignin)}
        >
            <FormSignIn onAction={handleOnAction} className={cn(formSignin)} />
            <div className={cn(containerLogo)}></div>
        </div>
    );
};

export default SignIn;