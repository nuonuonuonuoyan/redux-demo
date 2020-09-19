import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveAction, takeAction, minusAction, plusAction } from '../../action'

const mapStateToProps = state => {
    console.log(state)
    return {
        money: state.moneyReducer.money,
        count: state.countReducer.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        plu() {
            dispatch(plusAction)
        },
        minus() {
            dispatch(minusAction)
        },
        save() {
            dispatch(saveAction)
        },
        take() {
            dispatch(takeAction)
        },
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
        // this.getAsyncInfo = this.getAsyncInfo.bind(this)
        this.take = this.take.bind(this)
        this.save = this.save.bind(this)
    }

    plusHandle() {
        this.props.plus()
    }

    minusHandle() {
        this.props.minus()
    }

    saveHandle() {
        this.props.save()
    }

    takeHandle() {
        this.props.take()
    }

    render() {
        return (
            <div>
                <div>{this.props.count}</div>
                <div>
                    <button onClick={this.plusHandle}>+</button>
                </div>
                <div>
                    <button onClick={this.minusHandle}>-</button>
                </div>
                {/* <div>
                    <button onClick={this.getAsyncInfo}>获取异步数据</button>
                </div> */}
                <div>
                    {this.props.money}
                </div>
                <div>
                    <button onClick={this.saveHandle}>存钱</button>
                </div>
                <div>
                    <button onClick={this.takeHandle}>取钱</button>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
