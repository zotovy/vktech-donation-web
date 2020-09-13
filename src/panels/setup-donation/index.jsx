import React from "react";
import {
    PanelHeader,
    Button,
    PanelHeaderBack,
    Input,
    FormLayout,
    Textarea,
    Select,
} from "@vkontakte/vkui";
import "./index.css";

const SetupDonation = (props) => {
    const state = {
        name: "",
        summa: undefined,
        goal: "",
        desc: "",
        author: "",
    };

    const onChange = (e) => {
        const { name, value } = e.currentTarget;
        state[name] = value;
    };

    return (
        <React.Fragment>
            <PanelHeader left={<PanelHeaderBack onClick={props.onBackClick} />}>
                {props.state.type === "once" ? "Целевой" : "Регулярный"}
                &nbsp;сбор
            </PanelHeader>
            *обложка*
            <FormLayout>
                <Input
                    onChange={onChange}
                    name="email"
                    top="Название сбора"
                    placeholder="Название сбора"
                />
                <Input
                    onChange={onChange}
                    name="summa"
                    top="Сумма, ₽"
                    placeholder="Сколько нужно собрать?"
                />
                <Input
                    onChange={onChange}
                    name="goal"
                    top="Цель"
                    placeholder="Например, лечение человека"
                />
                <Textarea
                    onChange={onChange}
                    name="desc"
                    top="Описание"
                    rows="1"
                    placeholder="На что пойдут деньги и как они кому-то помогут?"
                />
                <Select top="Куда получать деньги" value="1">
                    <option value="1">Счёт VK Pay · 1234</option>
                </Select>
                {props.state.type === "once" ? (
                    <Select top="Автор" value="1">
                        <option value="1">Матвей Правосудов</option>
                    </Select>
                ) : (
                    <React.Fragment />
                )}
                <Button onClick={props.go} size="xl">
                    {props.state.type === "once" ? "Далее" : "Создать сбор"}
                </Button>
            </FormLayout>
        </React.Fragment>
    );
};

export default SetupDonation;
