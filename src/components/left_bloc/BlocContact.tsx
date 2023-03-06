import React from "react";
import { Box, Flex, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react'
import './Bloc.scss'
import '../../assets/variables.scss'
import TextIcon from './bloc_components/TextIcon'
import BlocTitle from './bloc_components/BlocTitle'

export default function BlocContact() {
  type Contact = {
    title: string;
    icon: string;
  };
  const [contacts, setContacts] = React.useState([])
  React.useEffect(() => {
    fetch("/contacts")
    .then((res) => res.json())
    .then((data) => setContacts(data));
  }, []);
  return(
    <Box w='100%'>
      <BlocTitle title='Contacte'></BlocTitle>
      {contacts.map((contact: Contact, index) => {
        return <TextIcon key={index} title={contact.title}/>
      })}
    </Box>
  )
}
