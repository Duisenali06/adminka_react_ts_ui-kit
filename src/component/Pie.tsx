import { ResponsivePie } from "@nivo/pie";

export type MyPieDatum = {
    id: string | number;
    label?: string;
    value: number;
    color?: string;
};

interface MyPieProps {
    data: MyPieDatum[];
}

const MyPie = ({ data }: MyPieProps) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        legends={[
            {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: "circle",
            },
        ]}
    />
);

export default MyPie;
