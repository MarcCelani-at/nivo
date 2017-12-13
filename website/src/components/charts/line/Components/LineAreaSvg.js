/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { PureComponent, Fragment } from 'react'
import { LineAreaSvg, LineChartSvg } from '@nivo/line'
import ComponentPropsDocumentation from '../../../properties/ComponentPropsDocumentation'

const defaults = LineAreaSvg.defaultProps

const properties = [
    {
        key: 'data',
        scopes: '*',
        required: true,
        description: (
            <div>
                Line data, which must conform to this structure:
                <pre className="code code-block">
                    {`Array.<{ x: {string|number}, y: {number} }}>`}
                </pre>
            </div>
        ),
    },
    {
        key: 'xScale',
        type: '{Function}',
        required: true,
        description: (
            <Fragment>
                The scale to use to compute area x positions, usually generated by the{' '}
                <code>@nivo/scales</code> package.
            </Fragment>
        ),
    },
    {
        key: 'yScale',
        type: '{Function}',
        required: true,
        description: (
            <Fragment>
                The scale to use to compute area y positions, usually generated by the{' '}
                <code>@nivo/scales</code> package.
            </Fragment>
        ),
    },
    {
        key: 'height',
        type: '{number}',
        required: true,
        description: 'Used to define where to close the area on bottom (px).',
    },
    {
        key: 'curve',
        type: '{string}',
        default: defaults.curve,
        required: false,
        description: 'Controls curve interpolation.',
    },
    {
        key: 'animate',
        type: '{boolean}',
        default: defaults.animate,
        required: false,
        description: 'Enable/disable transitions.',
    },
    {
        key: 'motionDamping',
        type: '{number}',
        default: defaults.motionDamping,
        required: false,
        description: 'Motion damping.',
    },
    {
        key: 'motionStiffness',
        type: '{number}',
        default: defaults.motionStiffness,
        required: false,
        description: 'Motion stiffness.',
    },
]

export default class LineAreaSvgDocumentation extends PureComponent {
    render() {
        const { data } = this.props

        return (
            <div>
                <h2>LineAreaSvg</h2>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 260px',
                        gridColumnGap: '20px',
                    }}
                >
                    <div>
                        <ComponentPropsDocumentation
                            chartClass="LineAreaSvg"
                            properties={properties}
                        />
                    </div>
                    <LineChartSvg
                        data={data}
                        width={260}
                        height={180}
                        margin={{ top: 4, right: 4, bottom: 4, left: 4 }}
                        axisLeft={false}
                        axisBottom={false}
                        enableDots={false}
                        enableArea={true}
                        areaOpacity={0.66}
                        colors={['#c6432d']}
                    />
                </div>
            </div>
        )
    }
}
