import React from 'react';
import TRComponentState from "tm-react/src/artifacts/component/tr-component-state";
import TRComponent from "tm-react/src/artifacts/component/tr-component";



export default class MyView extends TRComponent<any, TRComponentState> {
     renderUI() {
        return (
            <React.Fragment>
                <h1>Bismillah to My View</h1>
            </React.Fragment>
        );
    }
}