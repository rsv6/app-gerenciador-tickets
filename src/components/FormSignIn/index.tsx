import { FC, FormHTMLAttributes, FormEvent } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSignInSchema } from '@/utils/validations/schemas';
// import Button from '@/components/Buttom';
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import styles from './formSignin.module.scss';
import { cn } from "@/lib/utils"
import clsx from "clsx"; 
import { z } from "zod";


interface FormSignInProps extends FormHTMLAttributes<HTMLFormElement> {
    onAction: (value: z.infer<typeof formSignInSchema>) => void;
    className?: string;
}

const FormSignIn: FC<FormSignInProps> = ({ onSubmit, onAction, className, ...props }) => {
    const form = useForm<z.infer<typeof formSignInSchema>>({
        resolver: zodResolver(formSignInSchema),
        defaultValues: {
            email: '',
            senha: '',
        },
    });
    const { 
        'button-singin': buttonSingin,
        'input-email': inputEmail,
        'input-senha': inputSenha
    } = styles;


    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onAction)}
                className={clsx(className)}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input 
                                    {...field} 
                                    placeholder="e-mail" 
                                    className={cn(inputEmail)} 
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="senha"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <Input 
                                    {...field} 
                                    placeholder="senha" 
                                    type="password" 
                                    className={cn(inputSenha)} 
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button 
                    type='submit'
                    className={cn(buttonSingin)}

                >
                    Entrar
                </Button>
            </form>
        
        </Form>
        // <form 
        //     onSubmit={onAction} 
        //     className={clsx(className)}
        //     {...props}
        // >
        //     <h1>Form SignIn</h1>

        //     <Button 
        //         type='submit'
        //         className={cn(buttonSingin)}
        //         variant='success'
        //     >
        //         Sign In
        //     </Button>
        // </form>
    );
}

export default FormSignIn;