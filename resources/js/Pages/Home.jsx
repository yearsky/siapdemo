import React from 'react'
import App from '../Layouts/App'
import $ from 'jquery';
import { usePage } from '@inertiajs/inertia-react';
export default function Home() {
    const { auth }= usePage().props;
    $(document).ready(function () {
        // Chart in Dashboard version 1
        var echartElemBar = document.getElementById('echartBar');
        if (echartElemBar) {
            var echartBar = echarts.init(echartElemBar);
            echartBar.setOption({
                legend: {
                    borderRadius: 0,
                    orient: 'vertical',
                    x: 'right',
                    data: ['Online', 'Offline']
                },
                grid: {
                    left: '8px',
                    right: '8px',
                    bottom: '0',
                    containLabel: true
                },
                tooltip: {
                    show: true,
                    // backgroundColor: 'rgba(0, 0, 0, .8)',
                },
                xAxis: [{
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true
                    }
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '${value}'
                    },
                    min: 0,
                    max: 100000,
                    interval: 50000,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        interval: 'auto'
                    }
                }],
    
                series: [{
                    name: 'Online',
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
                    label: { show: false, color: '#0168c1' },
                    type: 'bar',
                    barGap: 0,
                    color: '#bcbbdd',
                    smooth: true,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: -2,
                            shadowColor: 'rgba(0, 0, 0, 0.3)'
                        }
                    }
                }, {
                    name: 'Offline',
                    data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
                    label: { show: false, color: '#639' },
                    type: 'bar',
                    color: '#7569b3',
                    smooth: true,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: -2,
                            shadowColor: 'rgba(0, 0, 0, 0.3)'
                        }
                    }
                }]
            });
            $(window).on('resize', function () {
                setTimeout(function () {
                    echartBar.resize();
                }, 500);
            });
        }
    
        // Chart in Dashboard version 1
        var echartElemPie = document.getElementById('echartPie');
        if (echartElemPie) {
            var echartPie = echarts.init(echartElemPie);
            echartPie.setOption({
                color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
                tooltip: {
                    show: true,
                    backgroundColor: 'rgba(0, 0, 0, .8)'
                },
    
                series: [{
                    name: 'Sales by Country',
                    type: 'pie',
                    radius: '60%',
                    center: ['50%', '50%'],
                    data: [{ value: 535, name: 'USA' }, { value: 310, name: 'Brazil' }, { value: 234, name: 'France' }, { value: 155, name: 'BD' }, { value: 130, name: 'UK' }, { value: 348, name: 'India' }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            });
            $(window).on('resize', function () {
                setTimeout(function () {
                    echartPie.resize();
                }, 500);
            });
        }
    });
    return (
        <div>
            <div className="breadcrumb">
                <h1>Hai, {auth.user.name}</h1>
            </div>
            <div className="separator-breadcrumb border-top" />
            <div className="row">
                {/* ICON BG */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                    <div className="card-body text-center">
                    <i className="i-Add-User" />
                    <div className="content">
                        <p className="text-muted mt-2 mb-0">New Leads</p>
                        <p className="text-primary text-24 line-height-1 mb-2">205</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                    <div className="card-body text-center">
                    <i className="i-Financial" />
                    <div className="content">
                        <p className="text-muted mt-2 mb-0">Sales</p>
                        <p className="text-primary text-24 line-height-1 mb-2">$4021</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                    <div className="card-body text-center">
                    <i className="i-Checkout-Basket" />
                    <div className="content">
                        <p className="text-muted mt-2 mb-0">Orders</p>
                        <p className="text-primary text-24 line-height-1 mb-2">80</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                    <div className="card-body text-center">
                    <i className="i-Money-2" />
                    <div className="content">
                        <p className="text-muted mt-2 mb-0">Expense</p>
                        <p className="text-primary text-24 line-height-1 mb-2">$1200</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-12">
                <div className="card mb-4">
                    <div className="card-body">
                    <div className="card-title">This Year Sales</div>
                    <div id="echartBar" style={{height: '300px'}} />
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                <div className="card mb-4">
                    <div className="card-body">
                    <div className="card-title">Sales by Countries</div>
                    <div id="echartPie" style={{height: '300px'}} />
                    </div>
                </div>
                </div>
            </div>
            
        </div>

    )
}


Home.layout = (page) => <App children={page} title="Home"/>