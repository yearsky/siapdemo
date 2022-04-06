import React, { useState } from 'react';
import App from '../Layouts/App';
import { Link } from '@inertiajs/inertia-react';
import DataGrid, {
    Column,
    Selection,
    Summary,
    TotalItem,
    SearchPanel,
    Editing,
    Popup,
    Paging,
    Lookup,
    Form,
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import { formatDate } from 'devextreme/localization';

import { Button } from 'devextreme-react/button';
import { SelectBox } from 'devextreme-react/select-box';

import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';

export default function Product() {
    const URL = 'http://bantuibularavel.me:70/product/api';
    const [ordersData] = useState(
        new CustomStore({
            key: 'id',
            load: () => sendRequest(`${URL}`),
            insert: (values) => sendRequest(`${URL}/insert`, 'POST', {
                values: JSON.stringify(values),
            }),
            update: (key, values) => sendRequest(`${URL}/update/${key}`, 'PUT', {
                key,
                values: JSON.stringify(values),
            }),
            remove: (key) => sendRequest(`${URL}/delete/${key}`, 'DELETE', {
                key,
            }),
        })
    );

    const sendRequest = (url, method, data) => {
        const d = $.Deferred();

        // logRequest(method, url, data);

        $.ajax(url, {
            method,
            data,
            cache: false,
            xhrFields: { withCredentials: true },
        })
            .done((result) => {
                d.resolve(method === "GET" ? result.data : result);
            })
            .fail((xhr) => {
                d.reject(
                    xhr.responseJSON ? xhr.responseJSON.Message : xhr.statusText
                );
            });
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
        });
        return d.promise();
    };
    console.log(sendRequest);
    const notesEditorOptions = { height: 100 };
    return (
        <div>
            <div className="breadcrumb">
                <h1>Product</h1>
                <ul>
                    <li><Link href={route('home.index')}>Home</Link></li>
                    <li>Product</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top" />
            <div className="col-md-12">
                <div className="card o-hidden mb-4">
                    <div className="card-body">
                        <DataGrid
                            id="gridContainer"
                            dataSource={ordersData}
                            // keyExpr="id"
                            showBorders={true}>
                            <SearchPanel visible={true}
                                width={240}
                                placeholder="Search..." />
                            <Selection mode="single" />
                            <Editing
                                mode="popup"
                                allowUpdating={true}
                                allowAdding={true}
                                allowDeleting={true}>
                                <Popup title="Product" showTitle={true} width={700} height={525} />
                                <Form>
                                    <Item itemType="group" colCount={2} colSpan={2}>
                                        <Item dataField="name" />
                                        <Item dataField="slug" />
                                        {/* <Item dataField="created_at" dataType="date" />                                 */}
                                        <Item dataField="price" />
                                        <Item
                                            dataField="description"
                                            editorType="dxTextArea"
                                            colSpan={2}
                                            editorOptions={notesEditorOptions} />
                                    </Item>
                                </Form>
                            </Editing>
                            <Column dataField="created_at" width={100} dataType="date" />
                            <Column dataField="name" width={130} caption="Name" />
                            <Column dataField="slug" caption="Slug" />
                            <Column dataField="description" caption="Description" />
                            <Column dataField="price" width={100} caption="Price" alignment="right" format="currency" />
                            <Summary>
                                <TotalItem
                                    column="created_at"
                                    summaryType="count" />
                                <TotalItem
                                    column="price"
                                    summaryType="sum"
                                    valueFormat="currency" />
                            </Summary>
                        </DataGrid>
                    </div>
                </div>
            </div>
        </div>

    );
}


Product.layout = (page) => <App children={page} title="Product" />;