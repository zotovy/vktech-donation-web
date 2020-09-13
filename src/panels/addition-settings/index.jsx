import React, { useState } from "react";
import {
    PanelHeader,
    Button,
    PanelHeaderBack,
    FormLayoutGroup,
    FormLayout,
    Radio,
    Select,
} from "@vkontakte/vkui";
import "./index.css";

const SetupDonation = (props) => {
    const [type, setType] = useState("whenRiched");

    return (
        <React.Fragment>
            <PanelHeader left={<PanelHeaderBack onClick={props.onBackClick} />}>
                Дополнительно
            </PanelHeader>
            <FormLayout>
                <Select top="Автор" value="1">
                    <option value="1">Матвей Правосудов</option>
                </Select>

                <FormLayoutGroup top="Сбор завершиться">
                    <Radio
                        name="radio"
                        onChange={(e) => setType(e.target.value)}
                        value="whenRiched"
                        checked={type === "whenRiched"}
                    >
                        Когда соберём сумму
                    </Radio>
                    <Radio
                        name="radio"
                        value="date"
                        onChange={(e) => setType(e.target.value)}
                        checked={type !== "whenRiched"}
                    >
                        В определённую дату
                    </Radio>
                </FormLayoutGroup>

                <Select top="Дата окончания" placeholder="Выберите дату">
                    <option value="1">20 сентября</option>
                </Select>

                <Button onClick={props.go} size="xl">
                    Создать сбор
                </Button>
            </FormLayout>
        </React.Fragment>
    );
};

export default SetupDonation;
