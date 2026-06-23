'use client';
import React, { useCallback, useState } from 'react';
import { network } from '@/data/data';
import {
  Background,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import CustomNodes from './CustomNodes';
import '@xyflow/react/dist/style.css';
import { useTranslation } from 'react-i18next';



const Nodes = () => {
  const { t } = useTranslation()
  const [nodes, , onNodesChange] = useNodesState(network.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(network.edges);
  const [filter, setFilter] = useState('انتخاب کنید');
  const [hoveredEdge, setHoveredEdge] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
 

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );

  const nodeTypes = {
    custom: CustomNodes,
  };




  //filter selectbox for nodes
  const filteredNodes = nodes

  //filter selectbox for nodes
  const filteredEdges = edges.filter((edge) => {
    if (filter === 'هیچ') return false;
    if (filter === 'ضعیف') return edge.type === 'weak';
    if (filter === 'قوی') return edge.type === 'strong';
    if (filter === 'قطع') return edge.type === 'disconnected';

    return true;
  });

  // manage mouseEnter in edge
  const handleEdgeMouseEnter = (event, edge) => {
    setHoveredEdge(edge);
    setHoveredNode(null);
  };

  // manage mouseLeave in edge
  const handleEdgeMouseLeave = () => {
    setHoveredEdge(null);
  };

  // manage mouseEnter in Node
  const handleNodeMouseEnter = (event, node) => {
    setHoveredNode(node);
    setHoveredEdge(null);
  };

  // manage mouseLeave in Node
  const handleNodeMouseLeave = () => {
    setHoveredNode(null);
  };

  // positioning tooltip
  const handleMouseMove = (event) => {
    setTooltipPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <>
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
            <option value="قطع">{t('disconnected')}</option>

          </select>
        </form>
      </div>



      <ReactFlowProvider>

        <ReactFlow
      
          nodeTypes={nodeTypes}
          nodes={filteredNodes}
          edges={filteredEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          style={{ backgroundColor: '#F7F9FB', overflow: 'visible' }}
          onEdgeMouseEnter={handleEdgeMouseEnter}
          onEdgeMouseLeave={handleEdgeMouseLeave}
          onNodeMouseEnter={handleNodeMouseEnter}
          onNodeMouseLeave={handleNodeMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <div className='nodeInfo'>
            <button className="ml-2 p-2 bg-gray-600 text-white rounded-[10px] text-sm" type="">
              {t('unconfirmedEquipment')}
            </button>
            <button className="ml-2 p-2 bg-green-600 text-white rounded-[10px] text-sm" type="">
              {t('connectedEquipment')}

            </button>
            <button className="ml-2 p-2 bg-red-600 text-white rounded-[10px] text-sm" type="">
              {t('unconnectedEquipment')}
            </button>
            <button className="ml-2 p-2 bg-purple-600 text-white rounded-[10px] text-sm" type="">
              {t('like')}
            </button>
          </div>

          <Background />
        </ReactFlow>

        {/*show tooltip under mouse in edge */}
        {hoveredEdge && (
          <div
            className="absolute text-sm bg-purple-100 p-2 rounded-[10px] shadow-lg flex flex-col items-end "
            style={{
              left: tooltipPosition.x + 10,
              top: tooltipPosition.y + 10,
              transform: 'translate(-50%, 10px)',
              zIndex: 1000,
            }}
          >
            <p ><strong className='text-sm'>Edge ID:</strong> {hoveredEdge.id}</p>
            <p ><strong className='text-sm'>Source:</strong> {hoveredEdge.source}</p>
            <p ><strong className='text-sm'>Target:</strong> {hoveredEdge.target}</p>
            <p ><strong className='text-sm'>Type:</strong> {hoveredEdge.type}</p>
          </div>
        )}

        {/*show tooltip under mouse in Node */}
        {hoveredNode && (
          <div
            className="absolute bg-blue-100 p-2 rounded-[10px] shadow-lg flex flex-col items-end"
            style={{
              left: tooltipPosition.x + 10,
              top: tooltipPosition.y + 10,
              transform: 'translate(-50%, 10px)',
              zIndex: 1000,
            }}
          >
            <p><strong className='text-sm'>Wan Ip:</strong> {hoveredNode.id}</p>
            <p><strong className='text-sm'>Lan Ip:</strong> {hoveredNode.data.label}</p>
          </div>
        )}
      </ReactFlowProvider>
    </>
  );
};

export default Nodes;
