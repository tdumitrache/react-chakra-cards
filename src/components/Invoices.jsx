import React from 'react';
import InvoiceList from './InvoiceList';
import { Box, HStack, VStack, Button, Text, Spacer } from "@chakra-ui/react";

function Invoices() {

    const invoices = [
        {
            date: 'March, 01, 2020',
            id: '#MS-415646',
            price: '$180'
        },
        {
            date: 'February, 10, 2021',
            id: '#RV-126749',
            price: '$250'
        },
        {
            date: 'April, 05, 2020',
            id: '#FB-212562',
            price: '$560'
        },
        {
            date: 'June, 25, 2019',
            id: '#QW-103578',
            price: '$120'
        },
        {
            date: 'March, 01, 2019',
            id: '#AR-803481',
            price: '$300'
        }
    ];

    return (
        <Box 
        w="584.5px"
        h="436px" 
        bg="#fff" 
        position="absolute" 
        p={5} 
        borderRadius="15px" 
        top="30px" 
        left="20px">
            <VStack>
                <HStack w="100%">
                    <Text 
                    color="#2D3748"
                    fontWeight="bold" 
                    fontSize="md">
                        Invoices
                    </Text>
                    <Spacer />
                    <Button 
                    colorScheme="teal" 
                    variant="outline" 
                    px={2} 
                    fontSize="xs" 
                    w="110.5px" 
                    h="35px" 
                    borderRadius="12px" 
                    borderColor="#4FD1C5" 
                    color="#4FD1C5">
                        VIEW ALL
                    </Button>
                </HStack>
                <InvoiceList invoices={invoices}/>
            </VStack>
            
            
        </Box>
    )
}

export default Invoices;
