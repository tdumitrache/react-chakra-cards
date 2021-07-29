import React from 'react';
import { VStack, Icon, Box, Text, Divider } from "@chakra-ui/react";

function PaymentItem(props) {

    const {title, description, value, icon} = props;

    return (
        <VStack>
            <Box bg="#4FD1C5" p={4}  borderRadius="15px" my={2}>
                <Icon as={icon} color="#fff" boxSize="20px"/>
            </Box>
            <VStack py={2}>
                <Text fontWeight="bold" color="#2D3748">{title}</Text>
                <Text fontWeight="bold" color="#A0AEC0" fontSize="xs">{description}</Text>
            </VStack>
            <Divider />
            <Text fontWeight="bold" color="#2D3748">{value}</Text>
        </VStack>
    )
}

export default PaymentItem
