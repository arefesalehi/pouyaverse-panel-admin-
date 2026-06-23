'use client'
import { useState } from 'react';

const Filters = () => {
      const [filter, setFilter] = useState('انتخاب کنید');

      const filteredNodes = nodes
  //filter selectbox for nodes
  const filteredEdges = edges.filter((edge) => {
    if (filter === 'هیچ') return false;
    if (filter === 'ضعیف') return edge.type === 'weak';
    if (filter === 'قوی') return edge.type === 'strong';
    return true;
  });
  return (
    <div>
    <form className="w-[300px] flex mr-10 ml-10 mb-[10px] mt-10 justify-center items-center">
      <label className="w-[130px]"> {t('tunnelFilter')}:  </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option defaultValue="همه">{t('selectItem')} </option>
        <option value="همه">{t('all')}</option>
        <option value="هیچ">{t('nothing')}</option>
        <option value="ضعیف">{t('weak')}</option>
        <option value="قوی">{t('strong')}</option>
      </select>
    </form>
  </div>
  )
}

export default Filters