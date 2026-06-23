'use client';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const LineChartAxis = () => {
    const {t}= useTranslation()
    const data = [
        { name: '15:22:30', uv: 4000, pv: 2400, amt: 2400 },
        { name: '15:24:00', uv: 3000, pv: 1398, amt: 2210 },
        { name: '15:25:30', uv: 2000, pv: 9800, amt: 2290 },
        { name: '15:30:00', uv: 2780, pv: 3908, amt: 2000 },
        { name: '15:33:00', uv: 1890, pv: 4800, amt: 2181 },
        { name: '15:34:30', uv: 3000, pv: 1398, amt: 2210 },
        { name: '15:45:00', uv: 2000, pv: 6200, amt: 2290 },
        { name: '15:46:30', uv: 2780, pv: 3908, amt: 2000 },
        { name: '15:49:30', uv: 2390, pv: 3800, amt: 2500 },
        { name: '15:52:30', uv: 3000, pv: 1398, amt: 2210 },
        { name: '15:54:00', uv: 2000, pv: 5800, amt: 290 },
        { name: '15:55:30', uv: 2780, pv: 3908, amt: 2000 },
        { name: '15:57:00', uv: 3490, pv: 4300, amt: 2100 },
    ];

    // y scope //////////
    const customTicks = [0.5, 0.10, 0.3, 0.4, 0.5];

    return (
        <div className='mt-10 mb-20'>
            <span className='p-2 rounded-[10px] text-white bg-purple-900'>  {t('oraganizationTrafficnetwork')}</span>
            <ResponsiveContainer height={250} width="100%">
                <LineChart data={data} margin={{ right: 25, top: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" interval="preserveStartEnd" />
                    <YAxis ticks={customTicks} domain={[0.1, 0.5]} />

                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#7842aa"
                        strokeWidth={3}
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#db53a9"
                        strokeWidth={3}
                    />
                    <Legend verticalAlign="top" height={36} />
                </LineChart>
            </ResponsiveContainer>
        </div>



    );
};

export default LineChartAxis;
