'use client';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { pieChartInfos } from '@/data/data';
import { useTranslation } from 'react-i18next';


const RADIAN = Math.PI / 180;
// customized label
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index, name }) => {
  if (value === 0) return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${name} (${value})`}
    </text>
  );
};

const PieChart1 = () => {

  const { t } = useTranslation()


  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>

        {pieChartInfos.map((chart, index) => (
          <div
            key={index}
            style={{
              width: '370px',
              display: 'flex',
              backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#fce4ec',
              padding: '20px',
              borderRadius: '10px',
              position: 'relative',

            }}
          >
            <h3 className='font-bold text-purple-700' style={{ textAlign: 'center', marginBottom: '-15px' }}>{t(chart.category)}</h3>
            <ResponsiveContainer width="45%" height={200}>
              <PieChart>
                <Pie
                  data={chart.data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(props) =>
                    renderCustomizedLabel({
                      ...props,
                      name: chart.data[props.index].name,
                    })
                  }
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chart.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}

                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* label section*/}
            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '50px' }}>
              {chart.data.map((entry, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                    fontSize: '14px',
                  }}
                >
                  <span
                    style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: entry.color,
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginLeft: '10px',
                      marginRight: '10px'
                    }}
                  ></span>
                  {t(entry[`label${index + 1}`])}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default PieChart1;
