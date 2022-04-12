import React from "react";

import {
    DataGrid,
    Column,
    Editing,
    SearchPanel,
    Scrolling,
    Lookup,
    Summary,
    HeaderFilter,
    TotalItem,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react/button";
import { SelectBox } from "devextreme-react/select-box";

import CustomStore from "devextreme/data/custom_store";
import { formatDate } from "devextreme/localization";
import "whatwg-fetch";

const URL = "http://127.0.0.1:8000";
// const URL = "https://api.bintangteknik.id/api";

const REFRESH_MODES = ["full", "reshape", "repaint"];

class CustomerGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ordersData: new CustomStore({
                key: "id",
                load: () => this.sendRequest(`${URL}/user/api`),
                insert: (values) =>
                    this.sendRequest(`${URL}/user/api/insert`, "POST", {
                        values: JSON.stringify(values),
                    }),
                update: (key, values) =>
                    this.sendRequest(`${URL}/user/api/update/${key}`, "PUT", {
                        key,
                        values: JSON.stringify(values),
                    }),
                remove: (key) =>
                    this.sendRequest(
                        `${URL}/user/api/delete/${key}`,
                        "DELETE",
                        {
                            key,
                        }
                    ),
            }),
            // customersData: new CustomStore({
            //     key: "Value",
            //     loadMode: "raw",
            //     load: () => this.sendRequest(`${URL}/CustomersLookup`),
            // }),
            // shippersData: new CustomStore({
            //     key: "Value",
            //     loadMode: "raw",
            //     load: () => this.sendRequest(`${URL}/ShippersLookup`),
            // }),
            requests: [],
            refreshMode: "reshape",
        };

        this.clearRequests = this.clearRequests.bind(this);
        this.handleRefreshModeChange = this.handleRefreshModeChange.bind(this);
    }

    sendRequest(url, method = "GET", data = {}) {
        this.logRequest(method, url, data);

        if (method === "GET") {
            return fetch(url, {
                method,
                withCredentials: true,
            }).then((result) =>
                result.json().then((json) => {
                    if (result.ok) return json.data;
                    throw json.Message;
                })
            );
        }

        const params = Object.keys(data)
            .map(
                (key) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(
                        data[key]
                    )}`
            )
            .join("&");

        return fetch(url, {
            method,
            body: params,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
            withCredentials: true,
        }).then((result) => {
            if (result.ok) {
                return result.text().then((text) => text && JSON.parse(text));
            }
            return result.json().then((json) => {
                throw json.Message;
            });
        });
    }

    logRequest(method, url, data) {
        const args = Object.keys(data || {})
            .map((key) => `${key}=${data[key]}`)
            .join(" ");

        const time = formatDate(new Date(), "HH:mm:ss");
        const request = [time, method, url.slice(URL.length), args].join(" ");

        this.setState((state) => ({
            requests: [request].concat(state.requests),
        }));
    }

    clearRequests() {
        this.setState({ requests: [] });
    }

    handleRefreshModeChange(e) {
        this.setState({ refreshMode: e.value });
    }
    onRowInserted(e) {
        e.component.navigateToRow(e.key);
        console.log("new row " + e.key);
    }
    onInitNewRow(e) {
        e.component.navigateToRow(e.key);
    }
    onEditorPreparing(e) {
        // console.log(e.dataField);
        console.log(e);
        if (e.dataField == "password") {
            e.editorOptions.disabled = true;
        }
        // if (e.row.rowType === "data") {
        //     e.editorOptions.disabled = !!e.row.inserted;
        // }
    }

    render() {
        const { refreshMode, ordersData, customersData, shippersData } =
            this.state;
        return (
            <React.Fragment>
                <DataGrid
                    id="grid"
                    showBorders={true}
                    dataSource={ordersData}
                    onRowInserted={this.onRowInserted}
                    onInitNewRow={this.onInitNewRow}
                    onEditorPreparing={this.onEditorPreparing}
                >
                    <Editing
                        mode="popup"
                        allowAdding={true}
                        allowDeleting={true}
                        allowUpdating={true}
                    />
                    <SearchPanel visible={true} />
                    <HeaderFilter visible={true} />

                    <Scrolling mode="standard" />

                    <Column dataField="name"></Column>
                    <Column dataField="username"></Column>
                    <Column dataField="phone"></Column>
                    <Column dataField="password"></Column>

                    <Column dataField="email"></Column>

                    {/* <Column
                        dataField="ShipVia"
                        caption="Shipping Company"
                        dataType="number"
                    > */}
                    {/* <Lookup
                            dataSource={shippersData}
                            valueExpr="Value"
                            displayExpr="Text"
                        /> */}
                    {/* </Column> */}
                    <Summary>
                        <TotalItem column="id" summaryType="count" />
                        {/* <TotalItem
                            column="Freight"
                            summaryType="sum"
                            valueFormat="#0.00"
                        /> */}
                    </Summary>
                </DataGrid>
            </React.Fragment>
        );
    }
}

export default CustomerGrid;
