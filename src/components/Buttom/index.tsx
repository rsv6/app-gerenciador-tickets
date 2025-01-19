import React from "react";
import clsx from "clsx"; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error"; // Variantes do DaisyUI
    size?: "sm" | "md" | "lg"; // Tamanhos do botão
    className?: string; // Classes CSS extras
    isLoading?: boolean; // Indica estado de carregamento
    leftIcon?: React.ReactNode; // Ícone à esquerda do texto
    rightIcon?: React.ReactNode; // Ícone à direita do texto
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    className,
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    ...props
  }) => {

    return (
      <button
        className={clsx(
          "btn", // Classe base do DaisyUI
          `btn-${variant}`, // Variantes de estilo (primary, secondary, etc.)
          `btn-${size}`, // Tamanhos (sm, md, lg)
          isLoading && "loading", // Classe de carregamento do DaisyUI
          className // Classes extras fornecidas via props
        )}
        disabled={isLoading || props.disabled} // Desabilita o botão durante o carregamento
        {...props} // Spread das outras props (onClick, type, etc.)
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>} {/* Ícone à esquerda */}
        {children} {/* Texto do botão */}
        {rightIcon && <span className="ml-2">{rightIcon}</span>} {/* Ícone à direita */}
      </button>
    );
};

export default Button;