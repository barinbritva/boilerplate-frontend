import React from "react";
import { CommonPageProps, CommonTemplate } from "../templates/CommonTemplate";
import { Heading } from "../atoms/Heading";
import { Button } from "../atoms/Button";

export interface HomePageProps extends  CommonPageProps {}

export const HomePage: React.FC<HomePageProps> = ({templateProps}) => {
    return <CommonTemplate {...templateProps}>
        <Heading>Home</Heading>
        <Button primary label="Click me" />
    </CommonTemplate>
}