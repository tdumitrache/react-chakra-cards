import React from 'react';
import SaleItem from './SaleItem';
import { VStack} from "@chakra-ui/react";

function SaleList(props) {

    const { sales } = props;

    return (
        <VStack w="100%">
            {
                sales.map((sale, index) => {
                    return (
                        <SaleItem
                            country={sale.country}
                            id={sale.id}
                            salesNumber={sale.salesNumber}
                            value={sale.value}
                            bounce={sale.bounce}
                            key={index}
                        />
                    )
                })
            }
        </VStack>
    )
}

export default SaleList;
