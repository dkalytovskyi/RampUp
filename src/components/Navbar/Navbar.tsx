import React, { FC } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

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

    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[initialItems[0].id.toString()]}>
            {initialItems.map(({ text, link, id }) => (
                <Menu.Item key={id}>
                    <Link to={link}>{text}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}