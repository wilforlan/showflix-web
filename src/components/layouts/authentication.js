import React from 'react';
import {
  Flex,
  Box,
  Image
} from "@chakra-ui/core";
import logo1x from '../../logos/showflix-logo-black-1x.png';
import PageTitle from "../common/page-title";

export default function AuthenticationLayout({ children, title }) {
  return (
    <>
      <PageTitle title={title} />
      <Flex flexDirection="row">
        <Flex margin='auto'>
          <Box w="400px" marginTop="100px">
            <Box margin="0px" textAlign="center">
              <Image
                objectFit="cover" 
                src={logo1x} 
                alt="ShowFlix Logo 1x" />
            </Box>
            {children}
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
