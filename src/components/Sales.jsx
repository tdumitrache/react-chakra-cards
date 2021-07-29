import React from 'react';
import SaleList from './SaleList';
import { Box, VStack, Text } from "@chakra-ui/react";


function Sales() {
    const sales = [
        {
            country: 'United States',
            id: 'US',
            salesNumber: 2500,
            value: '$214,000',
            bounce: '29,9%'
        },
        {
            country: 'Germany',
            id: 'DE',
            salesNumber: 3900,
            value: '$446,700',
            bounce: '40,22%'
        },
        {
            country: 'United Kingdom',
            id: 'GB',
            salesNumber: 1300,
            value: '$121,900',
            bounce: '19,22%'
        },
        {
            country: 'Brasil',
            id:'BR',
            salesNumber: 920,
            value: '$52,100',
            bounce: '39,22%'
        }
    ]
    return (
        <Box
        w="788px"
        h="375px" 
        bg="#fff" 
        p={5} 
        borderRadius="15px"
        position="absolute"
        top="30px"
        left="672px">
            <VStack>
                <Text
                    color="#2D3748, 100%"
                    fontWeight="bold"
                    alignSelf="flex-start"
                    py={2}
                >
                    Sales by Country
                </Text>
            <SaleList sales={sales}/>
            </VStack>
        </Box>
    )
}

export default Sales;
