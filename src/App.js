import React, { useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import { View, Panel, PanelHeader, Button } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

// Panels
import Donation from "./panels/donation";
import Type from "./panels/type";
import SetupDonation from "./panels/setup-donation";
import AdditionSettings from "./panels/addition-settings";
import Posting from "./panels/posting";

const App = () => {
    const [activePanel, setActivePanel] = useState("posting");
    const [state, setState] = useState({ type: "once" });

    return (
        <View activePanel={activePanel}>
            <Panel id="donation" centered>
                <Donation go={() => setActivePanel("type")} />
            </Panel>
            <Panel id="type" centered>
                <Type
                    onBackClick={() => setActivePanel("donation")}
                    go={(type) => {
                        setActivePanel("setup-donation");
                        setState({ ...state, type });
                    }}
                />
            </Panel>
            <Panel id="setup-donation">
                <SetupDonation
                    state={state}
                    go={(newState) => {
                        if (state.type == "once") {
                            setActivePanel("addition-settings");
                        } else {
                            setActivePanel("posting");
                        }
                        setState({ ...state, ...newState });
                    }}
                    onBackClick={() => setActivePanel("type")}
                />
            </Panel>

            <Panel id="addition-settings">
                <AdditionSettings
                    onBackClick={() => setActivePanel("setup-donation")}
                    go={(donType) => {
                        setActivePanel("posting");
                        setState({ ...state, donType });
                    }}
                />
            </Panel>

            <Panel id="posting">
                <Posting
                    onBackClick={() => {
                        setActivePanel("donation");
                        setState({});
                    }}
                />
            </Panel>
        </View>
    );
};

export default App;
