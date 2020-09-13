import React from "react";
import { PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import "./index.css";

const Type = (props) => {
    return (
        <React.Fragment>
            <PanelHeader left={<PanelHeaderBack onClick={props.onBackClick} />}>
                Тип сбора
            </PanelHeader>
            <button onClick={() => props.go("once")}>Целевой</button>
            <button onClick={() => props.go("regular")}>Регулярный</button>
        </React.Fragment>
    );
};

export default Type;
