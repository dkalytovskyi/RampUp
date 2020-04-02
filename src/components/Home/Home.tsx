import React, { FC } from 'react';
import { Typography } from 'antd';

import './styles.css';

export const Home: FC = () => {
    const { Title } = Typography;

    return (
        <div className="centeredContentContainer homePageContent">
            <Title>Hello World!</Title>
        </div>
    )
}
