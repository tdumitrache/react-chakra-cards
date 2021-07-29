import React from 'react';
import PaymentItem from './PaymentItem';
import { Box } from "@chakra-ui/react";

function Payment(props) {

    const {left, title, description, value, icon} = props;
    
    return (
        <Box w="240px" h="240px" borderRadius="15px" position="absolute" top="430px" left={left} bg="#fff" p={6}>
            <PaymentItem
            title={title}
            description={description}
            value={value} 
            icon={icon}
            />
        </Box>
    )
}

export default Payment
