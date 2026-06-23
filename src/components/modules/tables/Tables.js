"use client";
import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { IoMdSettings } from "react-icons/io";
import Select from "react-select";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import 'react-tabs/style/react-tabs.css';
import { useTranslation } from "react-i18next";

export default function DynamicTable({ columns, data }) {
    const {t}= useTranslation()
    const [rows, setRows] = useState(data);
    const [activeTab, setActiveTab] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [columnGroups, setColumnGroups] = useState([]);

    // Sync data changes
    useEffect(() => {
        setRows(data);
    }, [data]);


    // Split columns into groups of 5
    useEffect(() => {
        const chunkArray = (arr, size) =>
            Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
                arr.slice(i * size, i * size + size)
            );

        setColumnGroups(chunkArray(columns, 5));
    }, [columns]);



    // Pagination calculations
    const totalPages = Math.max(1, Math.ceil(rows.length / rowsPerPage));
    const safeCurrentPage = Math.min(currentPage, totalPages);
    const indexOfLastRow = (safeCurrentPage - 1) * rowsPerPage + rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

    const handleInputChange = (rowIndex, key, value) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex][key] = value;
        setRows(updatedRows);
    };



    // Pagination handlers
    const handlePageChange = (newPage) => {
        setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
    };


    const handleRowsPerPageChange = (e) => {
        const newRowsPerPage = Number(e.target.value);
        const newTotalPages = Math.ceil(rows.length / newRowsPerPage);
        
        setRowsPerPage(newRowsPerPage);
        setCurrentPage((prevPage) => Math.min(prevPage, newTotalPages)); // صفحه را تنظیم کن
    };
    
    

    const renderTable = (columns) => (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-purple-400 ">
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.id}
                                className="px-4 text-white py-3 text-center text-xs font-medium  uppercase tracking-wider"
                                style={{ width: col.width }}
                            >
                            {t( col.label)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {currentRows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                            {columns.map((col) => (
                                <td
                                    key={col.id}
                                    className={`px-4 text-center align-middle py-3 text-sm text-gray-700 ${col.type === 'icon' || col.type === "status-circle" || col.type === 'actions' || col.type === 'badge' ? "flex justify-center items-center mt-5" : ''}`}
                                >


                                    {/* قسمت اصلاح شده برای تاگل */}
                                    {col.type === "toggle" && (
                                        <div className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={!!row[col.id]}
                                                onChange={(e) => handleInputChange(rowIndex, col.id, e.target.checked)}
                                                className="sr-only peer"
                                                id={`toggle-${rowIndex}-${col.id}`}
                                            />
                                            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-colors duration-200">
                                                <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 peer-checked:translate-x-5" />
                                            </div>
                                        </div>
                                    )}


                                    {col.id === 'id' && (
                                        <span className="font-medium text-gray-900"></span>
                                    )}
                                    {col.type === "status-circle" && (
                                        <div className={`w-4 h-4  rounded-full ${row.connectionStatus === "connected"
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                            }`} />
                                    )}
                                    {col.type === 'icon' && col.icon_name === 'setting' ? <IoMdSettings /> : ''}


                                    {col.type === "dropdown-with-add" && (
                                        <select
                                            value={row[col.id]}
                                            onChange={(e) => handleInputChange(rowIndex, col.id, e.target.value)}
                                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                            text-sm transition-all"
                                        >
                                            {col.options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    )}

                                    {col.type === "dropdown" && (
                                        <select
                                            value={row[col.id]}
                                            onChange={(e) => handleInputChange(rowIndex, col.id, e.target.value)}
                                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm 
                                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                           text-sm transition-all"
                                        >
                                            {col.options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    )}


                                    {col.type === "text" && col.editable && col.id !== 'publicIp' && col.id !== 'AddressMac' && col.id !== 'gateway' ? (
                                        <input
                                            type="text"
                                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                            text-sm transition-all"
                                            value={row[col.id]}
                                            placeholder={col.placeholder}
                                            onChange={(e) => handleInputChange(rowIndex, col.id, e.target.value)}
                                        />
                                    ) : col.type === "text" && col.box ? (
                                        <span className="text-gray-900 bg-gray-300 p-2 rounded">{row[col.id]}</span>
                                    ) : null}
                                    {
                                        col.type === 'text' && col.id === 'id' ? (
                                            <span className="text-gray-900">{row[col.id]}</span>

                                        ) : null
                                    }
                                    {
                                        col.type === 'text' && col.id === 'AddressMac' ? (
                                            <p>198.200.01.02</p>
                                        ) : null
                                    }
                                    {
                                        col.type === 'text' && col.id === 'gateway' || col.id === 'publicIp' ? (

                                            <div className='flex justify-center items-center'>
                                                <input
                                                    type="text"
                                                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm 
                                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                             text-sm transition-all"
                                                    value={row[col.id]}
                                                    placeholder={col.placeholder}
                                                    onChange={(e) => handleInputChange(rowIndex, col.id, e.target.value)}
                                                />
                                                <IoMdSettings />
                                            </div>

                                        ) : null
                                    }


                                    {col.type === "number" && (
                                        <input
                                            type="number"
                                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm 
                                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                             text-sm transition-all"
                                            value={row[col.id]}
                                            placeholder={col.placeholder}
                                            onChange={(e) => handleInputChange(rowIndex, col.id, e.target.value)}
                                        />
                                    )}

                                    {col.type === "multi-select" && (
                                        <Select
                                            isMulti
                                            options={col.options}
                                            value={row[col.id].map((tag) =>
                                                col.options.find((option) => option.value === tag)
                                            )}
                                            onChange={(selectedOptions) => {
                                                const selectedValues = selectedOptions.map((option) => option.value);
                                                handleInputChange(rowIndex, col.id, selectedValues);
                                            }}
                                            className="text-sm"
                                            classNames={{
                                                control: () => "border-gray-300 !shadow-sm",
                                                menu: () => "!border-gray-300 !shadow-lg",
                                            }}
                                            placeholder="Select..."
                                        />
                                    )}

                                    {col.type === "badge" &&
                                        <div className={`w-4 h-4  rounded-full ${row.connectionStatus === "connected"
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                            }`} />}


                                    {col.type === "actions" && (
                                        <div className="flex space-x-2">
                                            {col.icons.map((icon, iconIndex) => (
                                                <button
                                                    key={iconIndex}
                                                    className="p-1.5 text-gray-500 hover:text-blue-600 rounded-md 
                                                     hover:bg-blue-50 transition-colors"
                                                    onClick={() => console.log(`${icon} clicked for row ${rowIndex}`)}
                                                >
                                                    {icon === "edit" ? "✏️" : icon === "delete" ? "🗑️" : "👁️"}
                                                </button>
                                            ))}
                                        </div>
                                    )}





                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <p className="text-sm ml-2 text-gray-700">{t('perherRow')}      </p>
                    <select
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}
                        className="pl-2 pr-8 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {[5, 10, 20].map((size) => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center space-x-4">
                    <span className="text-sm ml-2 text-gray-700">
                        {t('Showing')} {(safeCurrentPage - 1) * rowsPerPage + 1} {t('of')}{' '}
                        {Math.min(safeCurrentPage * rowsPerPage, rows.length)} {t('of')}{' '}
                        {rows.length} {t('row')}
                    </span>
                    <div className="flex space-x-1">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            < MdKeyboardArrowRight className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <MdKeyboardArrowLeft className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <Tabs
                selectedIndex={activeTab}
                onSelect={(index) => setActiveTab(index)}
                className="border-b border-gray-200"
            >
                <TabList className="flex space-x-1 overflow-x-auto">
                    {columnGroups.map((group, index) => (
                        <Tab
                            key={`tab-${index}`}
                            className={`px-4 py-2 text-sm font-medium bg-purple-300 rounded-t-lg border-b-2 transition-colors ${activeTab === index
                                    ? 'bg-purple-50 border-purple-700 '
                                    : 'border-transparent hover:text-purple-700 hover:border-purple-900'
                                }`}
                        >
                            {t('Group')} {index + 1}
                        </Tab>
                    ))}
                </TabList>

                <div className="py-4">
                    {columnGroups.map((group, index) => (
                        <TabPanel key={`panel-${index}`}>
                            {renderTable(group)}
                        </TabPanel>
                    ))}
                </div>
            </Tabs>
        </div>
    );
}
