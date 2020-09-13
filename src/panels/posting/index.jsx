import React, { useState } from "react";
import {
    PanelHeader,
    Button,
    PanelHeaderContent,
    FormLayoutGroup,
    FormLayout,
    Radio,
    Select,
    List,
    Cell,
    PanelHeaderContext,
    PanelHeaderButton,
} from "@vkontakte/vkui";
import {
    Icon16Dropdown,
    Icon28UsersOutline,
    Icon28SettingsOutline,
} from "@vkontakte/icons";
import "./index.css";

const BackIcon = ({ onClick }) => {
    return (
        <div className="icon close_icon" onClick={onClick}>
            <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9.73641 0.263604C10.0879 0.615076 10.0879 1.18492 9.73641 1.5364L6.273 5L9.73641 8.46362C10.0586 8.7858 10.0854 9.29148 9.81695 9.64424L9.73641 9.73641C9.38494 10.0879 8.81509 10.0879 8.46362 9.73641L5 6.273L1.5364 9.73641C1.18492 10.0879 0.615076 10.0879 0.263604 9.73641C-0.0878679 9.38494 -0.0878679 8.81509 0.263604 8.46362L3.727 5L0.263604 1.5364C-0.0585786 1.21421 -0.0854272 0.708534 0.183058 0.355769L0.263604 0.263604C0.615076 -0.087868 1.18492 -0.087868 1.5364 0.263604L5 3.727L8.46362 0.263604C8.81509 -0.087868 9.38494 -0.087868 9.73641 0.263604Z"
                    fill="#818C99"
                />
            </svg>
        </div>
    );
};

const GoIcon = ({ onClick, active }) => {
    return (
        <div
            className={`icon go_icon ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM19.7071 12.2929L14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L13 10.4142V20C13 20.5523 13.4477 21 14 21C14.5523 21 15 20.5523 15 20V10.4142L18.2929 13.7071C18.6834 14.0976 19.3166 14.0976 19.7071 13.7071C20.0976 13.3166 20.0976 12.6834 19.7071 12.2929Z"
                    fill="#3F8AE0"
                />
            </svg>
        </div>
    );
};

const SetupDonation = (props) => {
    const [type, setType] = useState("whenRiched");
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <PanelHeader
                left={<BackIcon onClick={props.onBackClick} />}
                right={<GoIcon onClick={props.onBackClick} />}
            >
                <PanelHeaderContent
                    aside={
                        <Icon16Dropdown
                            onClick={() => setOpen(!open)}
                            style={{
                                transform: `rotate(${
                                    open ? "180deg" : "9\0deg"
                                })`,
                            }}
                        />
                    }
                >
                    Матвей
                </PanelHeaderContent>
            </PanelHeader>
            <PanelHeaderContext opened={open} onClose={() => setOpen(false)}>
                <List>
                    <Cell data-mode="all">Матвей</Cell>
                </List>
            </PanelHeaderContext>
            <FormLayout>
                <textarea type="text" className="no-border" autoFocus />
            </FormLayout>
            *эта штука*
        </React.Fragment>
    );
};

export default SetupDonation;
