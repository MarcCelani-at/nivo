import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.span`
    display: block;
    background-color: ${({ theme }) => theme.colors.accent};
    color: #fff;
    text-align: center;
    padding: 12px 24px;
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
`

class ApiSubmit extends Component {
    render() {
        const { loading, onClick } = this.props

        return <Button onClick={onClick}>{loading ? 'sending' : 'generate'}</Button>
    }
}

ApiSubmit.propTypes = {
    loading: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

ApiSubmit.defaultProps = {}

export default ApiSubmit
