import React from 'react'

import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, FormInput2 } from './contactElements';


const Contact = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">Portfolio</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Contact Info</FormH1>
                        <FormLabel htmlFor='for'>Full Name</FormLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Message</FormLabel>
                        <FormInput2 type='text' required />
                        <FormButton type='submit'>submit</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Contact