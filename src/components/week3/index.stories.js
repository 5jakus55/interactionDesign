import React, { Component } from "react";
import { Button } from "./index";

export default {
    title: 'Week 3/Button',
    component: Button,
}

export const Primary = () => <Button primary>Button</Button>;
export const ColourOne = () => <Button color="#1200ee"> Button 2 </Button>;
export const ColourTwo = () => <Button color="#1280ee"> Button 3 </Button>;