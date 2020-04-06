import React, { FC } from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/types';

import './styles.css';

export const Home: FC = () => {
    const selectName = (state: RootState) => state.signup;

    const user = useSelector(selectName);
    
    const { Title } = Typography;

    return (
        <div className="centeredContentContainer homePageContent">
            {user.firstName ? <Title>Hello {user.firstName}!</Title> : <Title>Hello World!</Title>}
        </div>
    )
}
