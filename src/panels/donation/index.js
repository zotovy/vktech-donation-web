import React from "react";
import { PanelHeader, Button } from "@vkontakte/vkui";
import "./index.css";

const Donation = (props) => {
    return (
        <React.Fragment>
            <PanelHeader>Пожертвования</PanelHeader>
            <span className="Donation__text">
                У Вас пока нет сборов.
                <br />
                Начните доброе дело.
            </span>
            <Button onClick={props.go}>Создать сбор</Button>
        </React.Fragment>
    );
};

export default Donation;
