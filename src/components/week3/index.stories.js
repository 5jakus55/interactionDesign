import React, { Component } from "react";
import { Button } from "./index";

export default {
    title: 'Week 3/Buttons',
    component: Button,
}

export const Primary = () => <Button primary color="#EFEAFC">LOG IN</Button>;
export const ColourOne = () => <Button color="#fff">SIGN UP</Button>;