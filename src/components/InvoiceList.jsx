import React from 'react'
import InvoiceItem from './InvoiceItem';
import { VStack } from "@chakra-ui/react";

function InvoiceList(props) {

    const {invoices} = props;

    return (
        <VStack w="100%">
            {
                invoices.map((invoice, index) => {
                    return (
                        <InvoiceItem 
                            date={invoice.date}
                            id={invoice.id}
                            price={invoice.price}
                            key={index}
                        />
                    );   
                         
                })
            }
        </VStack>
    )
}

export default InvoiceList;
