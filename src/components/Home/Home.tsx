import React, { FC } from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/types';

import './styles.css';

export const Home: FC = () => {
    const selectName = (state: RootState) => state.users;

    const users = useSelector(selectName);
    
    const { Title } = Typography;

    return (
        <div className="centeredContentContainer homePageContent">
            {users.length ? <Title>Hello {users[users.length-1].firstName}!</Title> : <Title>Hello World!</Title>}
        </div>
    )
}
