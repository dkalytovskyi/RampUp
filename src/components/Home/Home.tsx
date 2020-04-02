import React, { FC } from 'react';
import { Typography } from 'antd';

import './styles.css';

export interface HomeProps {
    title?: string;
}

export const Home: FC<HomeProps> = (props) => {
    const { Title } = Typography;

    return (
        <div className="centeredContentContainer homePageContent">
            <Title>{props.title}</Title>
        </div>
    )
}

Home.defaultProps = {
    title: 'Hello World!'
}