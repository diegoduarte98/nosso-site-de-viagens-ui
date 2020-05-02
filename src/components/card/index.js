import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const { title } = this.props;
        return (
            <>
                <div className="card" title={title}>
                    <div className="card-header">{title}</div>
                    <div className="card-body">{this.props.children}</div>
                </div>
            </>
        )
    }
}
