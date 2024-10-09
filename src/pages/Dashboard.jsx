import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Grid', value: 40 },
  { name: 'Diesel', value: 15 },
  { name: 'Solar', value: 30 },
  { name: 'Rooftop', value: 15 },
];

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <Row className="mb-4">
        {/* First Row: One Long Card with Three Partitions */}
        <Card className="w-100">
          <CardBody className="d-flex">
            <Col className="border-end text-center">
              <CardTitle tag="h5">Total Energy Consumption</CardTitle>
              <CardText>450 kWh</CardText>
            </Col>
            <Col className="border-end text-center">
              <CardTitle tag="h5">Energy Savings</CardTitle>
              <CardText>120 kWh</CardText>
            </Col>
            <Col className="text-center">
              <CardTitle tag="h5">Renewable Energy Contribution</CardTitle>
              <CardText>25%</CardText>
            </Col>
          </CardBody>
        </Card>
      </Row>

      <Row>
        {/* Second Row: One Big Card with Two Partitions */}
        <Card className="w-100">
          <CardBody className="d-flex">
            <Col className="border-end">
              <CardTitle tag="h5">Current Energy Usage</CardTitle>
              <CardText>220 kWh</CardText>
              {/* Example Data Visualization Component */}
              <div className="chart-placeholder">
                <PieChart width={300} height={200}>
                  <Pie data={data} cx={150} cy={100} outerRadius={80} fill="#8884d8" dataKey="value">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </Col>
            <Col>
              <CardTitle tag="h5">Energy Savings Overview</CardTitle>
              <CardText>Last Month: 150 kWh saved</CardText>
              <CardText>Last Year: 1200 kWh saved</CardText>
              {/* Example Data Visualization Component */}
              <div className="chart-placeholder">
                <PieChart width={300} height={200}>
                  <Pie data={data} cx={150} cy={100} outerRadius={80} fill="#82ca9d" dataKey="value">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </Col>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
};

export default Dashboard;
