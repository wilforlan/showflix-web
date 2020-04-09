import React, { Component } from 'react';
import AuthticationLayout from "../components/layouts/authentication";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex
} from "@chakra-ui/core";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

class SignUp extends Component {
    render() {
        return (
           <AuthticationLayout title="Create Account - ShowFlix">
            <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input placeholder="John Doe" type='text' id="name" />
            </FormControl>
            
            <FormControl mt={6}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input placeholder="john@doe.com" type='email' id="email" />
            </FormControl>

            <FormControl mt={6}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input placeholder="*******" type="password" id="password" />
            </FormControl>

            <Flex margin="0px" flexDirection="row-reverse">
                <Button
                    ml="auto"
                    mt={4}
                    variantColor="teal"
                    type="submit"
                    rightIcon={FiArrowRight}
                    variant="outline"
                >
                    Create Account
                </Button>

                <Button
                    mr="auto"
                    mt={4}
                    variantColor="teal"
                    type="submit"
                    _hover={{ bg: "black", color: "white" }}
                >
                    <Link to="/">Sign In</Link>
                </Button>
            </Flex>
           </AuthticationLayout>
        )
    }
}

export default SignUp