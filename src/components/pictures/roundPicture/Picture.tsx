import React from "react";
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'
import "./Picture.scss";

export function Picture() {
  return(
    <Wrap className="profile">
      <WrapItem>
        <Avatar name="Dan Abrahmov" src='https://bit.ly/dan-abramov' size='2xl'></Avatar>
      </WrapItem>
    </Wrap>
  )
}
