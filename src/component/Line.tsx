import { ResponsiveLine} from '@nivo/line'
// import { lineData } from '../data/line'

interface lineData {
    x: string,
    y: number
}

export interface MyLineData {
    id : string,
    data: lineData[],
}

export interface LineProps {
    data:MyLineData[]
}


export const Line = ({ data /* see data tab */ }:LineProps) => (
    <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
)