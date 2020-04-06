import React, { FC } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

export interface NavbarProps {
    items: Array<NavbarItem>;
}

export interface NavbarItem {
    text: string;
    link: string;
    id: number;
}

const getInitialItems = (props: NavbarProps): Array<NavbarItem> => {
    return props.items;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const initialItems = getInitialItems(props);
    const location = useLocation();

    return (
        <Menu 
            theme="dark" 
            mode="horizontal" 
            defaultSelectedKeys={[initialItems[0].link]}
            selectedKeys={[location.pathname]}>
            {initialItems.map(({ text, link }) => (
                <Menu.Item key={link}>
                    <Link to={link}>{text}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}