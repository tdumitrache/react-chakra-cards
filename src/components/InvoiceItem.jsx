import React from 'react';
import { VStack, HStack, Text, Spacer, Icon } from "@chakra-ui/react";
import { FaFileAlt } from "react-icons/fa";


function InvoiceItem(props) {

    const {date, id, price} = props;

    return (
        <HStack w="100%" py={2}>
            <VStack>
                <Text 
                    fontSize="sm"
                    fontWeight="bold"
                    color="#2D3748"
                >
                    {date}
                </Text>
                <Text
                    fontSize="xs"
                    color="#A0AEC0"
                    alignSelf="flex-start"
                    justifySelf="flex-start"
                >
                    {id}
                </Text>
            </VStack>
            <Spacer />
            <HStack>
                <Text mx={3} color="#A0AEC0">{price}</Text>
                <HStack mr={3}>
                    <Icon as={FaFileAlt}/>
                    <Text fontWeight="bold" fontSize="xs">PDF</Text>
                </HStack>
            </HStack>
            
        </HStack>
    )
}

export default InvoiceItem;
