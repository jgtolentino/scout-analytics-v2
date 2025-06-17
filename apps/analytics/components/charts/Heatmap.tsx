'use client';
import React from 'react';
import * as d3 from 'd3';

interface HeatmapProps {
  data: Array<{
    region: string;
    day: string;
    revenue: number;
  }>;
}

export function RevenueHeatmap({ data }: HeatmapProps) {
  React.useEffect(() => {
    // D3 heatmap implementation
    const margin = { top: 30, right: 30, bottom: 30, left: 100 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Clear previous chart
    d3.select('#heatmap').selectAll('*').remove();

    const svg = d3.select('#heatmap')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Color scale
    const colorScale = d3.scaleSequential(d3.interpolateReds)
      .domain([0, d3.max(data, d => d.revenue) || 1]);

    // Get unique regions and days
    const regions = Array.from(new Set(data.map(d => d.region)));
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Create scales
    const xScale = d3.scaleBand()
      .domain(days)
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleBand()
      .domain(regions)
      .range([0, height])
      .padding(0.1);

    // Add rectangles
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.day) || 0)
      .attr('y', d => yScale(d.region) || 0)
      .attr('width', xScale.bandwidth())
      .attr('height', yScale.bandwidth())
      .style('fill', d => colorScale(d.revenue))
      .style('stroke', '#fff')
      .style('stroke-width', 1);

    // Add axes
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));

  }, [data]);

  return <div id="heatmap" className="w-full" />;
}