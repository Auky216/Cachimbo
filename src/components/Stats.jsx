import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export const PiePercentage = ({ data, size, colors }) => {
  let dataExist = [];
  let colorsAsigned = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].value !== 0) {
      dataExist.push(data[i]);
      colorsAsigned.push(colors[i]);
    }
  }
  return (
    <PieChart
      series={[
        {
          data: dataExist,
          arcLabel: (item) => `${item.label}`,
          paddingAngle: size / 90,
          innerRadius: size * 0.1,
          outerRadius: size * 0.5,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 12,
        },
      }}
      margin={{ right: 0, top: 0, left: 0, bottom: 0 }}
      width={size}
      height={size + 20}
      colors={colorsAsigned}
      tooltip={{ open: false }}
      slotProps={{
        legend: { hidden: true },
      }}
    />
  );
};
