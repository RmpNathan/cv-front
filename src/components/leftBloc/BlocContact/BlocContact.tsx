import React from "react";
import { Box } from '@chakra-ui/react'
import '../Bloc.scss'
import '../../../assets/variables.scss'
import TextIcon from '../blocComponents/TextIcon'

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
      {contacts.map((contact: Contact, index) => {
        return <TextIcon key={index} title={contact.title}/>
      })}
    </Box>
  )
}
