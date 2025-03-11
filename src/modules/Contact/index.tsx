import { type FC, useState } from "react";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormStyled } from "@components/Form";
import { Input } from "@components/Form/components/Input";
import { Button } from "@components/Button";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

/**
 * FormSubmit API (no backend required)
 * @url https://formsubmit.co/
 */
export const Contact: FC = () => {
    const [emailSend, setEmailSend] = useState(false);

    /**
     * Zod schema for form validation
     */
    const schema = z.object({
        name: z.string().min(2, {
            message: "El nombre debe tener al menos 2 caracteres",
        }),
        email: z.string().email({
            message: "Por favor, introduzca un correo electrónico válido",
        }),
        message: z.string().min(10, {
            message: "El mensaje debe tener al menos 10 caracteres",
        }),
    });

    /**
     * React hook form setup
     */
    const contactForm = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    /**
     * Submit form function using FormSubmit API
     */
    const formSubmit = contactForm.handleSubmit(async (values) => {
        const response = await fetch("https://formsubmit.co/jocsan.riquelme.m@gmail.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            setEmailSend(true);
        } else {
            console.error("Error sending form");
        }
    });

    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                {!emailSend ? (
                    <FadeIn>
                        <FormStyled onSubmit={formSubmit}>
                                <h2>
                                    ¿Tienes alguna pregunta o quieres trabajar junto a nosotros? <b>¡Hablemos!</b>
                                </h2>
                            
                                <Input
                                    type="text"
                                    placeholder="Nombre *"
                                    register={contactForm.register("name")}
                                    error={contactForm.formState.errors.name?.message}
                                />
                                <Input
                                    type="email"
                                    placeholder="Correo Electrónico *"
                                    register={contactForm.register("email")}
                                    error={contactForm.formState.errors.email?.message}
                                />
                                <Input
                                    type="textarea"
                                    placeholder="Escríbenos .... *"
                                    register={contactForm.register("message")}
                                    error={contactForm.formState.errors.message?.message}
                                />

                                {/* Contenedor del botón alineado a la derecha */}
                                <S.ButtonWrapper>
                                    <button type="submit" disabled={contactForm.formState.isSubmitting}>
                                        <Button asButton={true} variant="secondary">
                                            {contactForm.formState.isSubmitting ? "Enviando...." : "Enviar"}
                                        </Button>
                                    </button>
                                </S.ButtonWrapper>
                            </FormStyled>


                    </FadeIn>
                ) : (
                    <S.ContactThankYou>
                        ¡Gracias por tu mensaje! Te responderemos lo antes posible.
                    </S.ContactThankYou>
                )}
                <S.ContactBox>
                    
                </S.ContactBox>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
