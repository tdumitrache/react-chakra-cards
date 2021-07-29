import React from 'react';
import { VStack, HStack, Text, Spacer, Divider } from "@chakra-ui/react";

function SaleItem(props) {

    const {country, id, salesNumber, value, bounce} = props;

    return (
        <VStack w="100%">
            <HStack w="100%" pl={1} pr={4}>
                <img
                    alt={country}
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${id}.svg`}
                />
                <VStack py={1.5} w="200px" justifyContent="flex-start" alignItems="flex-start" pl={2}>
                    <Text color="#A0AEC0" fontSize="xs" fontWeight="medium">COUNTRY:</Text>
                    <Text fontWeight="semibold" fontStyle="xs" position="relative" top="-8px">{country}</Text>
                </VStack>
                <Spacer />
                <VStack>
                    <Text color="#A0AEC0" fontSize="xs" fontWeight="medium">SALES:</Text>
                    <Text fontWeight="bold" fontStyle="xs" position="relative" top="-8px">{salesNumber}</Text>
                </VStack>
                <Spacer />
                <VStack>
                    <Text color="#A0AEC0" fontSize="xs" fontWeight="medium">VALUE:</Text>
                    <Text fontWeight="bold" fontStyle="xs" position="relative" top="-8px">{value}</Text>
                </VStack>
                <Spacer />
                <VStack>
                    <Text color="#A0AEC0" fontSize="xs" fontWeight="medium">BOUNCE:</Text>
                    <Text fontWeight="bold" fontStyle="xs" position="relative" top="-8px">{bounce}</Text>
                </VStack>
                
            </HStack>
            <Divider type="solid" />
        </VStack>
    )
}

export default SaleItem
