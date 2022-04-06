import React,{ useState } from 'react';
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

import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';

export default function Category() {
    const URL = 'http://bantuibularavel.me:70/category/api';
    const [category] = useState(
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

    
    return (
        <div>
            <div className="breadcrumb">
                <h1>Category</h1>
                <ul>
                    <li><Link href={route('home.index')}>Home</Link></li>
                    <li>Category</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top" />
            <div className="col-md-12">
                <div className="card o-hidden mb-4">                    
                    <div className="card-body">
                    <DataGrid
                        id="gridContainer"
                        dataSource={category}
                        // keyExpr="ID"
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
                            <Popup title="Category" showTitle={true} width={700} height={525} />
                            <Form>
                            <Item itemType="group" colCount={1} colSpan={2}>
                                <Item dataField="name" />                                
                            </Item>
                            </Form>
                        </Editing>
                        <Column dataField="created_at" width={100} dataType="date" />                        
                        <Column dataField="name" />
                        <Column dataField="slug" caption="Slug" />
                        <Summary>
                            <TotalItem
                                column="created_at"
                                summaryType="count" />
                        </Summary>
                    </DataGrid>
                    </div>
                </div>
            </div>
        </div>

    );
}


Category.layout = (page) => <App children={page} title="Category" />;