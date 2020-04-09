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

class SignIn extends Component {
    render() {
        return (
           <AuthticationLayout>
            <FormControl>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input placeholder="john@doe.com" type='email' id="email" />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input placeholder="*******" type="password" id="password" />
            </FormControl>

            <Flex margin="0px" flexDirection="row-reverse">
                <Button
                    ml="auto"
                    mt={4}
                    variantColor="grey.600"
                    type="submit"
                    rightIcon={FiArrowRight}
                    variant="outline"
                >
                    Sign In
                </Button>

                <Button
                    mr="auto"
                    mt={4}
                    variantColor="gray"
                    type="submit"
                    _hover={{ bg: "black", color: "white" }}
                >
                    <Link to="/register">Create Account</Link>
                </Button>
            </Flex>
           </AuthticationLayout>
        )
    }
}

export default SignIn